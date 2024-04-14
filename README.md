This project is using nextJS with tailwindCSS, MUI and json-server

-Changes
1. restaurants_sample -> db.json
2. At db.json file, isBooked was add to identified a booked restaurant.

To start a project

1. npm install

2. cd client and run 'npx json-server db.json --watch --port 8000' (json server to imitate api)

3. open 2nd terminal, cd client then run 'npm run dev'


Note
1. No multiple booking (yet).
2. For authorization, this website don't have an authentication process which mean everyone can access any route (if they know the url or pathname).
