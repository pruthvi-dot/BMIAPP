import json

def lambda_handler(event, context):
    result=calculatebmi (180,65)
    # TODO implement
    return {
        'statusCode': 200,
        'body': json.dumps(result)
    }

def calculatebmi(weight,height):
    bmi = int((weight * 703) / (height * height))
    return bmi

