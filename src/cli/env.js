const parseEnv = () => {
  const prefix = "RSS";
  const environmentVariables = {};

  for (const key in process.env) {
    if (key.startsWith(prefix)) {
      const formattedKey = key.substring(prefix.length);
      environmentVariables[formattedKey] = process.env[key];
    }
  }

  const formattedOutput = Object.entries(environmentVariables)
    .map(([key, value]) => `${prefix}_${key}=${value}`)
    .join("; ");

  console.log(formattedOutput);
};

// Example usage:
parseEnv();
