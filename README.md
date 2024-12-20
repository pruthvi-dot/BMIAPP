# BMIAPP

How It Works

Users visit the CloudFront URL to access the BMI calculator website deployed in S3 bucket, where they enter their height and weight into a form. The frontend then sends this input data to the API Gateway, which invokes a Lambda function. This function calculates the BMI using the provided data and returns the result to the frontend, which displays the BMI value to the user.