const mongoose = require("mongoose");
const User = require("./Users");

mongoose
  .connect("mongodb://localhost:27017/appdb")
  .catch((e) => console.log(e));

run();
async function run() {
  try {
    const user = await User.findOne({ name: "Kyle" }).where({
      email: { $exists: true },
    });
    console.log(user);
    await user.save();
    console.log(user);
    console.log(user.namedEmail);
    // user.sayHi();
    //   .gt("12")
    //   .where("name")
    //   .equals("Kyle")
    //   .populate("bestFriend")
    //   .limit(1)
    //   .select("age");
    // await user[0].save();
    //new code for creating a new user
    // const user = await User.create({
    //   name: "Kyle",
    //   age: 26,
    //   email: "test@test.com",
    //   hobbies: ["Weight Lifting", "Bowling"],
    //   address: {
    //     street: "Main St",
    //   },
    // });
    // user.createdAt = 5;
    // await user.save();
    // console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}

//   user.name = "Sally";
//   await user.save();
//   //   const user = new User({ name: "Kyle", age: 26 });
//   //   await user.save();
//   console.log(user);
