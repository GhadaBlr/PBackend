# Image Node sur Docker

FROM node:22-bullseye



# Dossier de travail

WORKDIR /app



# Copier Packages (Modules)

COPY package*.json ./



#Installer les modules

RUN npm install



# Copier les autres fichiers

COPY . .



# Exposer le port de l'application 

EXPOSE 3000



# Executer l'application

CMD ["npm","start"]


