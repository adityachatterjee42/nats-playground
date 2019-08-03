import {connect, NatsConnectionOptions, Payload} from 'ts-nats';

async function init(){
    let nats;
    try{
    nats = await connect();
    }
    catch(err){
        console.log(err);
    }
    let sub = await(nats.subscribe('news', (err, msg) => {
        if(err){
            console.log('there was an error');
        }
        else{
            console.log(msg);
        }
    }));

    nats.publish('news', 'the world is ending');
}

init();