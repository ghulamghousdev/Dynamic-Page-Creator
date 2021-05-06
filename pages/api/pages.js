import connectDB from "../../middleware/database";
import PageName from "../../models/pages";

const handler = async (req, res) => {
  const { pagename } = req.body;
  if (pagename) {
    try {
      var page = new PageName({
        pagename,
      });
      var nameSaved = await page.save();
      return res.status(200).send(page);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  } else {
    res.status(422).send("data_incomplete");
  }
};

export default connectDB(handler);
