## Project Development Purpose
  This package is attempted to build custom UI of sugarcrm using RestAPI v 10.

## Diagram


     +----------+
     | SugarCRM |
     |  Server  |
     |          |
     +----------+
        ^   v
        |   |   Request/Response
        |(A)|     RestAPI v10
        |   |
        ^   v
     +---------+                                   +---------------+
     |         |>--(C1)---- Resource Owner ------->|               |
     | Package |         Password Credentials      |    Browser    |
     |   API   |                                   |  Client-side  |
     |         |<--(C2)---- Access Token ---------<|      Code     |
     |         |    (w/ Optional Refresh Token)    |               |
     +---------+                                   +---------------+
        ^   v                                          ^      v
        |   |   Synchronize Data                       |      |
        |(B)|     RestAPI v10                          |      |
        |   |                                          |      |
        ^   v                                          |      |
     +----------+                                      |      |
     |          |>-------------------------------------+      |
     | ClientDB |   Direct Access DB while off connection     |
     |  SQLite  |<--------------------------------------------+
     |          |
     |          |
     +----------+


**Figure 1: Work Flow of Package Usage**



## Usage
  - Detail below ... (Update later)

## Package Dependencies
  - request package to use requesting and handling response data as needed.

## About Owner
  - Author: Lytay TOUCH
  - Email: lytaytouch@gmail.com

## Publish Year
  @March 2017
