# Console Queue Management Program

## Purpose

The Console Queue Management Program is a JavaScript application that allows you to manage a queue of console messages. It provides the functionality to add messages to the queue and log them to the console one by one with a specified delay. Additionally, you can view the current console queue, cancel specific console messages, or cancel all past messages.

## Instructions

Follow the steps below to use the Console Queue Management Program:

1. Clone the repository to your local machine.

2. Open the index.html file in a web browser.

3. Open the browser's developer console to view the logged messages.

4. Use the following functions to interact with the console queue:

   - addToConsoleQueue(message): Add a message to the console queue. The message will be logged to the console one by one with a specified delay.

   - viewConsoleStack(): View the current console queue and its messages.

   - cancelConsole(message): Cancel a specific console message by providing its content as an argument. The message will be removed from the queue.

   - cancelAllConsoles(): Cancel all past console messages. The queue will be cleared, and the current console will be reset.

### Example Usage:

```
// Adding messages to the queue
addToConsoleQueue("Message 1");
addToConsoleQueue("Message 2");
addToConsoleQueue("Message 3");

// View the current console queue
viewConsoleStack();

// Cancel a specific message
cancelConsole("Message 2");

// Cancel all past console messages
cancelAllConsoles();

```

Please note that the addToConsoleQueue function will log the messages to the console one by one with a default delay of 1000 milliseconds (1 second) between each log. You can modify this delay time in the processNextConsole function if needed.

Enjoy managing your console messages with the Console Queue Management Program!
