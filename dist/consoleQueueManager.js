const consoleQueue = [];
let currentConsole = null;
export function addToConsoleQueue(message, timer) {
  consoleQueue.push(message);
  if (!currentConsole) {
    processNextConsole(timer);
  }
}
function processNextConsole(timer = 1000) {
  if (consoleQueue.length > 0) {
    currentConsole = consoleQueue.shift();
    console.log(currentConsole);
    setTimeout(() => {
      currentConsole = null;
      processNextConsole();
    }, timer);
  }
}
export function viewConsoleStack() {
  console.log("Console Queue:");
  console.log(consoleQueue);
}
export function cancelConsole(message) {
  const index = consoleQueue.indexOf(message);
  if (index !== -1) {
    console.log(`Cancelled: ${message}`);
    consoleQueue.splice(index, 1);
  } else {
    console.log(`Message "${message}" not found in the queue.`);
  }
}
export function cancelAllConsoles() {
  consoleQueue.length = 0;
  currentConsole = null;
}