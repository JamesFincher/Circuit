Circuit is a photo bullitin intended to display images created by MidJourny and other AI tools.

It was scaffolded using create-t3-app. It currently fetches data from an express api, which querys an AWS S3 bucket.  

To get it started:

1. Clone the repo.
2. npm i
3. Take a look at example.env and create a local ENV following the format. 
- DATABASE_URL is is currently setup to utilize a postgresql server hosted on AWS RDS. Update this with your database url.
- The application utilizes Discord as its current auth. To get this working, got to https://discord.com/developers/applications and create a new project. Copy the vars over.
- 


---Readme is a work in progress---

docs refrenced in the development of this project:

https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-example-photos-view.html

https://javascript.plainenglish.io/how-to-upload-files-to-aws-s3-in-react-591e533d615e

https://github.com/Developer-Amit/react-aws-s3

https://www.prisma.io/docs/concepts/components/prisma-client/crud
