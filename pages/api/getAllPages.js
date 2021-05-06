import connectDB from "../../middleware/database";
import pagenames from "../../models/pages";

const handler = async (req, res) => {
  try {
    const records = await pagenames.find();
    console.log(records);
    if (!records) {
      throw new Error("Pages not Found");
    }
    res.status(200).send(records);
  } catch (err) {
    console.log(err);
    res.status(401).send(err);
  }
};

export default connectDB(handler);
