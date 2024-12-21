// globals.d.ts
declare module "*.html" {
    const content: string;
    export default content;
  }
  
  // Extend existing types
  interface Window {
    onReset: any; // Use specific types as needed
  }
  