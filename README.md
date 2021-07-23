# talleres graficos

Illustrates how to deploy a barebones FastAPI via Heroku.

## To run api in locally

    python -m venv .venv
    source .venv/bin/activate
    pip install -r requirements.txt

Then, run via uvicorn:

    uvicorn api.main:app --reload

## To deploy api to heroku

    heroku login  
    heroku create
    git push heroku main
    heroku open
    
## how to deploy frontend

    cd app/  
    yarn build
    npx gh-pages -d build
    
remember the "homepage" var in package.json is the domain to deploy
