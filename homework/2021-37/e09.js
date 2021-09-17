// doIt("a");  // outputs a
// doIt("a", "b"); // outputs ab
// doIt("a", "b", "c"); // outputs abc

const doIt = (x = "", y = "", z = "") => console.log(x + y + z);

doIt("a");
doIt("a", "b");
doIt("a", "b", "c");
