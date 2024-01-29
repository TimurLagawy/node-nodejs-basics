const parseArgs = () => {
  const args = process.argv.slice(2);

  const parsedArgs = {};

  args.forEach((arg) => {
    const [propName, value] = arg.split("=");
    parsedArgs[propName.replace(/^-+/g, "")] = value;
  });

  console.log(parsedArgs);
};

parseArgs();
