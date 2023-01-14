# pull official base image
FROM node:17-alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json .
RUN npm install


# add app
COPY . ./

EXPOSE 5173
# start app
CMD ["npm","run","dev","--","--host"]