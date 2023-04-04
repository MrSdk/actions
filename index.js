import "dotenv/config";

for ( let i=0;i<5;i++ ) {
  console.log("Step = "+i);
}

console.log(
  process.env.APP_VERSION
);