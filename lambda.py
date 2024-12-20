import json

def lambda_handler(event, context):
    
    # Print the Event Data to see what's coming through
    print('Event Data is: ', event)
    response = {}

    # Get the Query String from the Event Data
    qry_params = event.get('queryStringParameters')

    print(f'Query Parameters are: {qry_params}')
    if qry_params is not None:
        
        height = qry_params.get('height')
        weight = qry_params.get('weight')

        result = calculatebmi (weight, height)
    
        response['result'] = result
    
    # TODO implement
    return {
        'statusCode': 200,
        'body': json.dumps(response),
        'headers': { 
               "content-type": "application/json", 
               "Access-Control-Allow-Origin" : "*",
               "Access-Control-Allow-Methods": "GET, OPTIONS"
            }
    }

def calculatebmi(weight,height):
    weight = int(weight)
    height = int(height)
    bmi = int((weight * 703) / (height * height))
    return bmi