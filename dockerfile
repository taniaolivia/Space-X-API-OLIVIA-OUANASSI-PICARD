# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app/

# add `/app/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

# this what make hot reloading works
# because you are starting your project
# in the same way you running it locally
RUN yarn run build
CMD yarn start