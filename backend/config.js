export default {
  MONGODB_URL:
    process.env.MONGODB_URL ||
    "mongodb+srv://goatwhite:Hoang@12@cluster0-ryp5w.gcp.mongodb.net/EmployeeDB?retryWrites=true&w=majority",
  JWT_SECRET: process.env.JWT_SECRET || "somethingsecret",
};
