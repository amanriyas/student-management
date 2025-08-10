export function generateId(prefix: string): string {
    
    const r = Math.floor(Math.random() * 1000000);

    return `${prefix.toUpperCase()}-${Date.now().toString().slice(-6)}-${r}`;

}

export function idParts(id: string): readonly [string, string, string]  {
  const parts = id.split("-");
  // ensure it returns a tuple with fixed length (pad if necessary)
  while (parts.length < 3) parts.push("0");
  return [
    parts[0] ?? "0",
    parts[1] ?? "0",
    parts[2] ?? "0"
  ] as const;
} 