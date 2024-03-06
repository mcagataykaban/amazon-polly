import * as dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import AWS from 'aws-sdk';

dotenv.config();
const app: Express = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const polly = new AWS.Polly({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  region: process.env.AWS_REGION
});


app.post('/text-to-speech', async (req: Request, res: Response) => {
  const { text, languageCode, voiceId } = req.body;

  if (!text || !languageCode || !voiceId) {
    return res.status(400).send("Missing required fields");
  }

  let params: AWS.Polly.SynthesizeSpeechInput = {
    Text: text,
    OutputFormat: 'mp3',
    VoiceId: voiceId,
    LanguageCode: languageCode,
    Engine: 'neural',
  };

  const signer = new AWS.Polly.Presigner(polly.config);

  signer.getSynthesizeSpeechUrl(params, (err: AWS.AWSError, url: string) => {
    if (err) {
      console.log(err, err.stack);
      res.status(500).send("Error generating URL");
    } else {
      res.status(200).send(url);
    }
  });
});

const server = app.listen(process.env.PORT || 5500, () => {
  const address = server.address();
  const port = typeof address === 'string' ? address : address?.port;
  console.log(`Server running on PORT ${port}`);
});