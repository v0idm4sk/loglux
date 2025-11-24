# loglux
LongLux is a Javascript library to decorate the console. With decoration functions, and allows you to define text styles, such as alert, error, message, etc.

## Instalation
Install or copy the loglux.js code to the GitHub repository

## Code
> This is a test code that you can try in your javascript file to test all LogLux functions

```
import { log, LogLuxClass } from "./loglux.js";

// --- NOTE: Please run this code in a modern browser console (F12) to see CSS styles correctly. ---

console.log("------------------------------------------------");
console.log("%c🚀 LogLux Library Test Suite Initiated", "color: #38c172; font-size: 16px; font-weight: bold;");
console.log("------------------------------------------------");

// ===================================================================
// 1. Factory Function and Method Chaining Test (log().style().show())
// ===================================================================
console.log("\n### 1. Factory & Chaining Tests ###");

// Test 1.1: Basic chaining with color and background
log("SUCCESS: User profile loaded successfully.")
    .style("bold green bg-black")
    .show();

// Test 1.2: Complex styling with special keywords
log("MODULE STATUS: Application core initialized.")
    .style("title underline blue")
    .show();

// Test 1.3: Credit/Small text style
log("Powered by LogLux Library")
    .style("credit italic red")
    .show();


// ===================================================================
// 2. Direct Initialization Test (Using the Constructor)
// ===================================================================
console.log("\n### 2. Constructor Initialization Test ###");

// Test 2.1: Initialize with message and styles directly
const criticalError = new LogLuxClass(
    "FATAL ERROR: Database connection failed.", 
    "bold bg-red white"
);
criticalError.show();

// Test 2.2: Initialize with message only, then chain styles
const setupMessage = new LogLuxClass("Starting component setup...");
setupMessage.style("bg-yellow black").show();


// ===================================================================
// 3. Default Style Test (No .style() call)
// ===================================================================
console.log("\n### 3. Default Style Test (No CSS provided) ###");

// Should use the default style (font-size: 14px) because this.css is empty.
log("This message should appear with the default 14px size.")
    .show();


// ===================================================================
// 4. Message Duplication Prevention Test (isLogged check)
// ===================================================================
console.log("\n### 4. Duplication Prevention Test ###");

const uniqueLog = log("This message should only appear once.")
    .style("bg-blue white");

// First call (Should execute and set isLogged = true)
uniqueLog.show();

// Second call (Should execute console.warn and return)
uniqueLog.show();


// ===================================================================
// 5. Message Overwriting Test (show() with argument)
// ===================================================================
console.log("\n### 5. Message Overwriting Test ###");

const preInitializedLog = log("--- Placeholder Text ---")
    .style("bold");

// The argument passed to show() overwrites the initial message.
preInitializedLog.show("Final output text overwrites initial message.");

console.log("\n------------------------------------------------");
console.log("   ✅ LogLux Test Suite Completed");
console.log("------------------------------------------------");
```