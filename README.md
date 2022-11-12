# Working with Tickets

## Creating a Branch

In your file path, you can run:

### `git checkout -b BRANCHNAME`

Make sure not to have spaces or capitals in your branch name

## Running in localHost

In the project directory, you can run:

### `npm run dev`

Wait for the `READY` in purple, and open in your browser ["http://localhost:3000"](http://localhost:3000)

## Commiting the Ticket

Terminate the `npm run dev` by typing `control + c` and then `y`

Add all your changes with `git add .`

Commit your changes with `git commit -m "WHAT YOU DID"` (i.e "Added styling to the Topbar")

Capitals and spaces don't matter, since it's in quotations

And finally `git push`

It will ask you to push upstream, just copy the command (i.e `git push --set-upstream origin NAMEOFBRANCH`)

It might ask for your ssh key passphrase, just type it in and press enter