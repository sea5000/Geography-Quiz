#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const envPath = path.resolve(__dirname, '..', '.env');
const outputPath = path.resolve(__dirname, '..', 'public', 'firebase-config.js');

if (!fs.existsSync(envPath)) {
  console.error('.env file not found. Copy .env.example to .env and fill in values.');
  process.exit(1);
}

const envContent = fs.readFileSync(envPath, 'utf-8');
const vars = {};

for (const line of envContent.split('\n')) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith('#')) continue;
  const [key, ...valueParts] = trimmed.split('=');
  vars[key.trim()] = valueParts.join('=').trim();
}

const required = [
  'FIREBASE_API_KEY',
  'FIREBASE_AUTH_DOMAIN',
  'FIREBASE_DATABASE_URL',
  'FIREBASE_PROJECT_ID',
  'FIREBASE_STORAGE_BUCKET',
  'FIREBASE_MESSAGING_SENDER_ID',
  'FIREBASE_APP_ID'
];

const missing = required.filter(k => !vars[k]);
if (missing.length) {
  console.error(`Missing required env vars: ${missing.join(', ')}`);
  process.exit(1);
}

const config = `const firebaseConfig = {
  apiKey: "${vars.FIREBASE_API_KEY}",
  authDomain: "${vars.FIREBASE_AUTH_DOMAIN}",
  databaseURL: "${vars.FIREBASE_DATABASE_URL}",
  projectId: "${vars.FIREBASE_PROJECT_ID}",
  storageBucket: "${vars.FIREBASE_STORAGE_BUCKET}",
  messagingSenderId: "${vars.FIREBASE_MESSAGING_SENDER_ID}",
  appId: "${vars.FIREBASE_APP_ID}"
};
`;

fs.writeFileSync(outputPath, config);
console.log('Generated public/firebase-config.js');
