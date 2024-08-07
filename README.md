# Lipa na M-Pesa STK Push Integration

This project implements an M-Pesa STK Push integration for a Node.js application using Express and Axios. It facilitates initiating M-Pesa payments through the Safaricom Daraja API.

## Overview

The `handleStkPush` function processes STK Push requests to initiate M-Pesa payments. It uses the Safaricom Daraja API to send payment requests to users' phones.

## Prerequisites

- Node.js
- npm or yarn
- An M-Pesa Daraja API account

## Environment Variables

Ensure you have the following environment variables set:

- `MPESA_BUSINESS_SHORT_CODE`: Your M-Pesa business short code
- `MPESA_PASS_KEY`: Your M-Pesa pass key

## Installation

1. Clone the repository:

```bash
git clone https://github.com/wangaevans/stk-push.git
```

2. Navigate to the project directory:
```bash
cd lipa-na-mpesa-stk-push
```
3. Install dependencies:
```bash
npm install
```

## Scripts

- `npm run build`: Compile TypeScript to JavaScript
- `npm start`: Run the compiled JavaScript
- `npm run dev`: Run the application in development mode with hot-reloading

## Usage

The `handleStkPush` function is an Express route handler. It expects a POST request with the following body parameters:

- `phone`: The phone number to send the STK push to
- `amount`: The amount to be paid

Example usage in an Express route:

```javascript
app.post('/stkpush', handleStkPush);
```

## Details
The  `handleStkPush` function:

Generates a base64 encoded password using the business short code, pass key, and current timestamp
Constructs the payload for the STK push request
Sends a POST request to the Safaricom API
Returns a JSON response with the API response data or an error message

## Error Handling
If the API request fails, the function will log the error and return a 500 status code with an error message.

Callback URL
The callback URL is currently set to `https://wangaevans.com/`. 
Update this to your actual callback URL in production.

## Security
Ensure that you properly secure your API keys and tokens. The code assumes that an authentication middleware (generateToken) is used to provide the access token.


## Contributing
If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.
## Links

- Project homepage: [https://github.com/wangaevans/stk-push#readme](https://github.com/wangaevans/stk-push#readme)
- Repository: [https://github.com/wangaevans/stk-push.git](https://github.com/wangaevans/stk-push.git)
- Issue tracker: [https://github.com/wangaevans/stk-push/issues](https://github.com/wangaevans/stk-push/issues)