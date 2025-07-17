// Sistema de alternância automática entre personas - Monetizefy AI
class PersonaSwitcher {
  constructor() {
    this.currentPersona = 'frontend-architect';
    this.confidence = 0;
    this.contextHistory = [];
    this.switchHistory = [];
    this.personas = null;
    this.loadPersonaConfig();
  }

  async loadPersonaConfig() {
    try {
      const config = require('./persona-manager.json');
      this.personas = config.personas;
      this.switchingRules = config.switching_rules;
      this.systemConfig = config.system;
    } catch (error) {
      console.error('Failed to load persona configuration:', error);
      this.fallbackMode();
    }
  }

  // Análise principal do contexto para determinar persona adequada
  analyzeContext(input, fileContext, conversationHistory) {
    const analysis = {
      keywords: this.extractKeywords(input.toLowerCase()),
      fileType: this.getFileType(fileContext),
      conversationTopic: this.analyzeConversation(conversationHistory),
      currentContext: this.getCurrentContext(),
      timestamp: Date.now()
    };

    return this.calculatePersonaScores(analysis);
  }

  // Extração inteligente de palavras-chave
  extractKeywords(input) {
    const stopWords = ['e', 'o', 'a', 'de', 'do', 'da', 'em', 'um', 'uma', 'para', 'com', 'por'];
    const words = input.split(/\s+/)
      .filter(word => word.length > 2)
      .filter(word => !stopWords.includes(word))
      .map(word => word.replace(/[^\w]/g, ''));
    
    return [...new Set(words)]; // Remove duplicatas
  }

  // Identificação do tipo de arquivo
  getFileType(fileContext) {
    if (!fileContext) return null;
    
    const path = fileContext.path || fileContext.filePath || '';
    const match = path.match(/\.(\w+)$/);
    return match ? `.${match[1]}` : null;
  }

  // Análise do histórico de conversa
  analyzeConversation(history) {
    if (!history || history.length === 0) return [];
    
    const recentMessages = history.slice(-5); // Últimas 5 mensagens
    const topics = [];
    
    recentMessages.forEach(message => {
      const keywords = this.extractKeywords(message.content || '');
      topics.push(...keywords);
    });
    
    return [...new Set(topics)];
  }

  // Contexto atual baseado no ambiente
  getCurrentContext() {
    const context = [];
    
    // Verificar arquivos abertos
    if (this.hasAstroFiles()) context.push('development', 'frontend');
    if (this.hasConfigFiles()) context.push('configuration', 'setup');
    if (this.hasMarkdownFiles()) context.push('documentation', 'content');
    
    return context;
  }

  // Cálculo de pontuação para cada persona
  calculatePersonaScores(analysis) {
    const scores = {};
    
    if (!this.personas) {
      return { 'frontend-architect': 10 };
    }

    Object.keys(this.personas).forEach(personaId => {
      const persona = this.personas[personaId];
      let score = 0;

      // Pontuação por palavras-chave (peso maior)
      const strongMatches = analysis.keywords.filter(kw => 
        persona.trigger_keywords.includes(kw)
      ).length;
      
      const keywordScore = strongMatches * 3;

      // Pontuação por contexto ativo
      const contextMatches = analysis.currentContext.filter(ctx =>
        persona.active_contexts.includes(ctx)
      ).length;
      
      const contextScore = contextMatches * 2;

      // Pontuação por tipo de arquivo
      const fileRelevance = persona.file_extensions.includes(analysis.fileType) ? 3 : 0;

      // Pontuação base da prioridade da persona
      const priorityScore = persona.priority * 0.1;

      // Bonus por conversa relacionada
      const conversationBonus = analysis.conversationTopic.filter(topic =>
        persona.trigger_keywords.includes(topic)
      ).length * 1.5;

      score = keywordScore + contextScore + fileRelevance + priorityScore + conversationBonus;
      scores[personaId] = Math.round(score * 100) / 100;
    });

    return scores;
  }

  // Determinar se deve fazer a troca
  shouldSwitch(scores) {
    const topPersona = Object.keys(scores).reduce((a, b) => 
      scores[a] > scores[b] ? a : b
    );
    
    const topScore = scores[topPersona];
    const currentScore = scores[this.currentPersona] || 0;
    
    const confidenceThreshold = this.switchingRules?.confidence_required || 0.7;
    const cooldownMessages = this.switchingRules?.cooldown_messages || 2;
    
    // Verificar se passou do período de cooldown
    const lastSwitch = this.switchHistory[this.switchHistory.length - 1];
    const messagesSinceSwitch = this.contextHistory.length - 
      (lastSwitch ? lastSwitch.messageIndex : 0);
    
    return {
      shouldSwitch: (
        topScore > (currentScore * 1.5) && // Deve ser significativamente melhor
        topScore >= confidenceThreshold &&
        topPersona !== this.currentPersona &&
        messagesSinceSwitch >= cooldownMessages
      ),
      topPersona,
      topScore,
      confidence: topScore / 10 // Normalizar para 0-1
    };
  }

  // Executar a troca de persona
  executeSwitch(newPersona, scores, reason) {
    const previousPersona = this.currentPersona;
    this.currentPersona = newPersona;
    this.confidence = scores[newPersona] / 10;
    
    const switchEvent = {
      from: previousPersona,
      to: newPersona,
      reason: reason,
      confidence: this.confidence,
      timestamp: Date.now(),
      messageIndex: this.contextHistory.length,
      scores: scores
    };
    
    this.switchHistory.push(switchEvent);
    
    return {
      switched: true,
      from: previousPersona,
      to: newPersona,
      reason: reason,
      confidence: this.confidence,
      announcement: this.generateSwitchAnnouncement(previousPersona, newPersona, this.confidence)
    };
  }

  // Gerar anúncio de mudança
  generateSwitchAnnouncement(from, to, confidence) {
    const personas = {
      'frontend-architect': '🏗️ Frontend Architect Expert',
      'seo-specialist': '🔍 SEO & Performance Expert',
      'copywriter': '✍️ Sales Copywriter Expert',
      'product-manager': '📊 Product & Strategy Expert',
      'devops': '🚀 DevOps & Infrastructure Expert'
    };

    const fromName = personas[from] || from;
    const toName = personas[to] || to;
    const confidencePercent = Math.round(confidence * 100);

    return `🔄 **Persona Switch Activated**\n` +
           `Switching from ${fromName} to ${toName}\n` +
           `Confidence: ${confidencePercent}% | Specialized assistance mode activated.`;
  }

  // Análise de padrões para aprendizado
  analyzePatterns() {
    const patterns = {
      timeOfDay: this.getTimePatterns(),
      fileTypes: this.getFilePatterns(),
      conversationFlow: this.getFlowPatterns(),
      switchEffectiveness: this.getSwitchEffectiveness()
    };
    
    return patterns;
  }

  // Métodos auxiliares para detecção de contexto
  hasAstroFiles() {
    // Simulação - em implementação real, verificaria arquivos abertos
    return true;
  }

  hasConfigFiles() {
    return false;
  }

  hasMarkdownFiles() {
    return false;
  }

  // Modo de fallback em caso de erro
  fallbackMode() {
    this.personas = {
      'frontend-architect': {
        trigger_keywords: ['component', 'astro', 'tailwind'],
        file_extensions: ['.astro', '.tsx'],
        priority: 10,
        active_contexts: ['development']
      }
    };
  }

  // API pública para processar input
  processInput(input, fileContext = null, conversationHistory = []) {
    this.contextHistory.push({
      input,
      fileContext,
      timestamp: Date.now()
    });

    const scores = this.analyzeContext(input, fileContext, conversationHistory);
    const switchDecision = this.shouldSwitch(scores);
    
    if (switchDecision.shouldSwitch) {
      return this.executeSwitch(
        switchDecision.topPersona,
        scores,
        'Context analysis triggered automatic switch'
      );
    }

    return {
      switched: false,
      currentPersona: this.currentPersona,
      confidence: this.confidence,
      scores: scores
    };
  }

  // Obter status atual
  getStatus() {
    return {
      currentPersona: this.currentPersona,
      confidence: this.confidence,
      totalSwitches: this.switchHistory.length,
      lastSwitch: this.switchHistory[this.switchHistory.length - 1] || null
    };
  }
}

// Exportar para uso
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PersonaSwitcher;
} else if (typeof window !== 'undefined') {
  window.PersonaSwitcher = PersonaSwitcher;
}

// Instância global para uso imediato
const personaSwitcher = new PersonaSwitcher();
