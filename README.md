## Fullstack App - (temporarily name)

# TODO
  # client
    # Cliend side App (using: create-react-app)
  # server
    # Server side App (GraphQL API)

                            |------------------------------------|
                            |                                    |
                            |---------------------|              |
      - Create------|       |                     ↓              |
      - Update------|       |      |-------------Book            |
                    |----→Events   |                             |
      - Delete------|←-|   | ↑     |-------------Cancel Booking←-|
      - View (Read)-|  |   ↓ |     |
                    |  |--Users----|  |----------Create
                    |       ↑         |
                |--|       |---------|
                |          |--------------------Login
              Filter
            "created by"
              "booked"