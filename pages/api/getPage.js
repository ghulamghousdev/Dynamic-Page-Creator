import connectDB from "../../middleware/database";
import pagenames from "../../models/pages";

const handler = async (req, res) => {
  let url = req.query.product;
  console.log(url);
  if (url) {
    try {
      const record = await pagenames.findOne({ pagename: url });
      console.log(record);
      if (!record) {
        throw new Error("Page Name not Found");
      }
      res.status(200).send(record);
    } catch (err) {
      console.log(err);
      res.status(401).send(err);
    }
  }
};

export default connectDB(handler);
