This project is using nextJS and typescript with tailwindCSS, MUI, json-server, react-hook-form (validate form) and zustand (stage management)

-Changes
1. restaurants_sample -> db.json
2. At db.json file, isBooked was add to identified a booked restaurant.

To start a project

1. cd client and run 'npm install'

2. Run 'npx json-server db.json --watch --port 8000' (json server to imitate api)

3. Open 2nd terminal, cd client then run 'npm run dev'


Note
1. No multiple booking (yet).
2. For authorization, this website don't have an authentication process which mean everyone can access any route (if they know the url or pathname).

