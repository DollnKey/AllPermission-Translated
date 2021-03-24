module.exports = (PermDefined) => {
    try {
        let perm = PermDefined.replace('CREATE_INSTANT_INVITE', 'Criar um Convite')
        .replace('KICK_MEMBERS', 'Expulsar Membros')
        .replace('BAN_MEMBERS', 'Banir Membros')
        .replace('ADMINISTRATOR', 'Administrador')
        .replace('MANAGE_CHANNELS', 'Gerenciar Canais')
        .replace('MANAGE_GUILD', 'Gerenciar Servidor')
        .replace('ADD_REACTIONS', 'Adicionar Reações')
        .replace('VIEW_AUDIT_LOG', 'Ver o Registro de Auditoria')
        .replace('PRIORITY_SPEAKER', 'Voz Prioritária')
        .replace('STREAM', 'Vídeo')
        .replace('VIEW_CHANNEL', 'Ver Canal')
        .replace('SEND_MESSAGES', 'Enviar Mensagens')
        .replace('SEND_TTS_MESSAGES', 'Enviar Mensagens de Voz')
        .replace('MANAGE_MESSAGES', 'Gerenciar Mensagens')
        .replace('EMBED_LINKS', 'Inserir Links')
        .replace('ATTACH_FILES', 'Anexar Arquivos')
        .replace('READ_MESSAGE_HISTORY', 'Ver Histórico de Mensagens')
        .replace('MENTION_EVERYONE', 'Mencionar Everyone')
        .replace('USE_EXTERNAL_EMOJIS', 'Usar Emojis Externos')
        .replace('VIEW_GUILD_INSIGHTS', 'Ver Análises do Servidor')
        .replace('CONNECT', 'Conectar')
        .replace('SPEAK', 'Falar')
        .replace('MUTE_MEMBERS', 'Silenciar Membros')
        .replace('DEAFEN_MEMBERS', 'Ensurdecer Membros')
        .replace('MOVE_MEMBERS', 'Mover Membros')
        .replace('CHANGE_NICKNAME', 'Alterar Apelido')
        .replace('MANAGE_NICKNAMES', 'Gerenciar Apelidos')
        .replace('MANAGE_ROLES', 'Gerenciar Cargos')
        .replace('MANAGE_WEBHOOKS', 'Gerenciar WebHooks')
        .replace('MANAGE_EMOJIS', 'Gerenciar Emojis')

        return perm;
    } catch (err) {
        return console.log(err)
    }
}
