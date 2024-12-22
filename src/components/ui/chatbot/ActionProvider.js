class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  // Mensaje de bienvenida
  handleWelcome() {
    const message = this.createChatBotMessage(
      "¡Hola! Soy tu asistente virtual. Estoy aquí para ayudarte con temas de ciberacoso, ciberbullying y recursos de apoyo. 😊\n\n" +
      "¿Cómo puedo ayudarte hoy? Puedes preguntar cosas como:\n" +
      "- '¿Qué es el ciberacoso?'\n" +
      "- 'Quiero denunciar un caso'\n" +
      "- 'Necesito apoyo emocional'\n" +
      "- 'Organizaciones que puedan ayudarme'."
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  // Respuesta emocional
  handleEmotionalSupport() {
    const message = this.createChatBotMessage(
      "Lamento que estés pasando por esto. 🫂 No estás solo/a y hay personas que quieren ayudarte. Puedes contactar:\n\n" +
      "- **Fundación ANAR**: Apoyo para niños y adolescentes ([Sitio web](https://www.anar.org), Tel: 800-911-2000).\n" +
      "- **UNICEF México**: Recursos para cuidarte en línea ([UNICEF México](https://www.unicef.org/mexico)).\n\n" +
      "Si quieres hablar con alguien, también puedo darte más recursos o guiarte sobre qué hacer. ¿Cómo te sientes ahora?"
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  // Ayuda con ciberacoso
  handleCiberacoso() {
    const message = this.createChatBotMessage(
      "El ciberacoso es cuando alguien usa plataformas digitales para acosar o intimidar a otras personas. Puede incluir mensajes ofensivos, amenazas o publicación de información privada.\n\n" +
      "Si estás enfrentando esto:\n" +
      "1. Bloquea a la persona que te acosa.\n" +
      "2. Guarda evidencia (capturas de pantalla).\n" +
      "3. Denuncia en la plataforma donde ocurrió.\n\n" +
      "También puedes reportar a las autoridades:\n" +
      "- **Policía Cibernética de México**: [Denunciar aquí](https://www.gob.mx/sspc/acciones-y-programas/denuncia-cibernetica).\n" +
      "- **C4 Veracruz**: [Sitio oficial](https://www.veracruz.gob.mx/seguridad-publica/centro-de-comando-y-control/).\n\n" +
      "¿Te gustaría más información o ayuda con los pasos?"
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  // Levantar denuncias
  handleDenuncia() {
    const message = this.createChatBotMessage(
      "Puedes levantar una denuncia de ciberacoso de forma rápida:\n\n" +
      "1. **Policía Cibernética de México**: [Denunciar aquí](https://www.gob.mx/sspc/acciones-y-programas/denuncia-cibernetica).\n" +
      "2. **Fiscalía General de la República (FGR)**: [Portal de denuncias](https://denunciadigital.pgr.gob.mx/).\n" +
      "3. **C4 Veracruz**: Llama al 911 o visita [C4 Veracruz](https://www.veracruz.gob.mx/seguridad-publica/centro-de-comando-y-control/).\n\n" +
      "Te sugiero tener toda la evidencia lista, como capturas de pantalla y mensajes. Si necesitas ayuda, dime."
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  // Consejos para protegerse
  handleConsejos() {
    const message = this.createChatBotMessage(
      "Aquí tienes algunos consejos para protegerte en línea:\n\n" +
      "1. Nunca compartas información personal en plataformas públicas.\n" +
      "2. Usa contraseñas seguras y actívalas en dos pasos.\n" +
      "3. Bloquea y reporta a cualquier usuario que te haga sentir inseguro/a.\n" +
      "4. Aprende más sobre ciberseguridad en el sitio de la [Policía Cibernética](https://www.gob.mx/sspc/acciones-y-programas/denuncia-cibernetica).\n\n" +
      "¿Te gustaría que te ayude con algo más específico?"
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  // Respuesta predeterminada
  handleUnknown() {
    const message = this.createChatBotMessage(
      "Lo siento, no entiendo esa consulta. Intenta con algo como:\n" +
      "- 'Necesito ayuda con ciberbullying'.\n" +
      "- '¿Cómo denunciar ciberacoso?'\n" +
      "- 'Organizaciones de apoyo'."
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }
}

export default ActionProvider;
