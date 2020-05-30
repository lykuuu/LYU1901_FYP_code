const express = require('express')
const app = express()
const cors = require('cors')
const port = 8080
const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml');
const { Wallets, Gateway } = require('fabric-network');
const crypto = require('crypto');
const elgamal = require('./Elgamal');
const nodemailer = require('nodemailer')
const fetch = require('node-fetch');

const transporter = nodemailer.createTransport({
    host: 'smtp.elasticemail.com',
    port: 2525,
    auth: {
        user: 'sylqiuyifeng@gmail.com',
        pass: '807E67F4F9F0CB5A4A85605E73E174DDCF8A'
    }
});

function add_encyption(a, b) {
    for (const key in a) {
        a[key] = a[key].map((v, i) => {
            return elgamal.add_encrypted(v, b[key][i])
        })
    }
    return a
}

// Main program function
async function issue_token(courseID, expDate, tokenString) {

    // A wallet stores a collection of identities for use
    const wallet = await Wallets.newFileSystemWallet('../identity/user/isabella/wallet');

    // A gateway defines the peers used to access Fabric networks
    const gateway = new Gateway();

    // Main try/catch block
    try {

        // Specify userName for network access
        // const userName = 'isabella.issuer@magnetocorp.com';
        const userName = 'isabella';

        // Load connection profile; will be used to locate a gateway
        let connectionProfile = yaml.safeLoad(fs.readFileSync('../gateway/connection-org2.yaml', 'utf8'));

        // Set connection options; identity and wallet
        let connectionOptions = {
            identity: userName,
            wallet: wallet,
            discovery: { enabled: true, asLocalhost: true }
        };

        await gateway.connect(connectionProfile, connectionOptions);

        const network = await gateway.getNetwork('mychannel');

        const contract = await network.getContract('tokencontract');

        let fac = "Fac1"
        let today = new Date();
        let issueDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`

        const issueResponse = await contract.submitTransaction('issue', fac, tokenString, courseID, issueDate, expDate);

        return issueResponse

    } catch (error) {
        console.log(`Error processing transaction. ${error}`);
        console.log(error.stack);
    } finally {
        gateway.disconnect();
    }
}

async function add_course(courseID, p, g, publicKey) {

    // A wallet stores a collection of identities for use
    const wallet = await Wallets.newFileSystemWallet('../identity/user/isabella/wallet');

    // A gateway defines the peers used to access Fabric networks
    const gateway = new Gateway();

    // Main try/catch block
    try {

        // Specify userName for network access
        // const userName = 'isabella.issuer@magnetocorp.com';
        const userName = 'isabella';

        // Load connection profile; will be used to locate a gateway
        let connectionProfile = yaml.safeLoad(fs.readFileSync('../gateway/connection-org2.yaml', 'utf8'));

        // Set connection options; identity and wallet
        let connectionOptions = {
            identity: userName,
            wallet: wallet,
            discovery: { enabled: true, asLocalhost: true }
        };

        await gateway.connect(connectionProfile, connectionOptions);

        const network = await gateway.getNetwork('mychannel');

        const contract = await network.getContract('coursecontract');

        const issueResponse = await contract.submitTransaction('add', courseID, p, g, publicKey);

        return issueResponse

    } catch (error) {
        console.log(`Error processing transaction. ${error}`);
        console.log(error.stack);
    } finally {
        gateway.disconnect();
    }
}

async function get_token(courseID, tokenString) {

    // A wallet stores a collection of identities for use
    const wallet = await Wallets.newFileSystemWallet('../identity/user/isabella/wallet');

    // A gateway defines the peers used to access Fabric networks
    const gateway = new Gateway();

    // Main try/catch block
    try {

        // Specify userName for network access
        // const userName = 'isabella.issuer@magnetocorp.com';
        const userName = 'isabella';

        // Load connection profile; will be used to locate a gateway
        let connectionProfile = yaml.safeLoad(fs.readFileSync('../gateway/connection-org2.yaml', 'utf8'));

        // Set connection options; identity and wallet
        let connectionOptions = {
            identity: userName,
            wallet: wallet,
            discovery: { enabled: true, asLocalhost: true }
        };

        await gateway.connect(connectionProfile, connectionOptions);

        const network = await gateway.getNetwork('mychannel');

        const contract = await network.getContract('tokencontract');

        const issueResponse = await contract.submitTransaction('get', tokenString, courseID);

        return issueResponse


    } catch (error) {

        console.log(`Error processing transaction. ${error}`);
        console.log(error.stack);

    } finally {

        gateway.disconnect();

    }
}

async function get_course(courseID) {

    // A wallet stores a collection of identities for use
    const wallet = await Wallets.newFileSystemWallet('../identity/user/isabella/wallet');

    // A gateway defines the peers used to access Fabric networks
    const gateway = new Gateway();

    // Main try/catch block
    try {

        // Specify userName for network access
        // const userName = 'isabella.issuer@magnetocorp.com';
        const userName = 'isabella';

        // Load connection profile; will be used to locate a gateway
        let connectionProfile = yaml.safeLoad(fs.readFileSync('../gateway/connection-org2.yaml', 'utf8'));

        // Set connection options; identity and wallet
        let connectionOptions = {
            identity: userName,
            wallet: wallet,
            discovery: { enabled: true, asLocalhost: true }
        };

        await gateway.connect(connectionProfile, connectionOptions);

        const network = await gateway.getNetwork('mychannel');

        const contract = await network.getContract('coursecontract');

        const issueResponse = await contract.submitTransaction('get', courseID);

        let result = JSON.parse(issueResponse.toString())

        return result


    } catch (error) {

        console.log(`Error processing transaction. ${error}`);
        console.log(error.stack);

    } finally {

        gateway.disconnect();

    }
}


async function add_eval(courseID, tokenString, submitDateTime, ciphertext) {

    // A wallet stores a collection of identities for use
    const wallet = await Wallets.newFileSystemWallet('../identity/user/isabella/wallet');

    // A gateway defines the peers used to access Fabric networks
    const gateway = new Gateway();

    // Main try/catch block
    try {

        // Specify userName for network access
        // const userName = 'isabella.issuer@magnetocorp.com';
        const userName = 'isabella';

        // Load connection profile; will be used to locate a gateway
        let connectionProfile = yaml.safeLoad(fs.readFileSync('../gateway/connection-org2.yaml', 'utf8'));

        // Set connection options; identity and wallet
        let connectionOptions = {
            identity: userName,
            wallet: wallet,
            discovery: { enabled: true, asLocalhost: true }
        };

        await gateway.connect(connectionProfile, connectionOptions);

        const network = await gateway.getNetwork('mychannel');

        const contract = await network.getContract('evaluationcontract');
        const tkcontract = await network.getContract('tokencontract');

        const issueResponse = await contract.submitTransaction('add', courseID, tokenString, submitDateTime, ciphertext)
        const tkissueResponse = await tkcontract.submitTransaction('redeem', tokenString, courseID)

        return issueResponse

    } catch (error) {

        console.log(`Error processing transaction. ${error}`);
        console.log(error.stack);

    } finally {

        gateway.disconnect();

    }
}

// express app
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'build')))

app.post('/api/test', async (req, res) => {
    let { testing } = req.body
    console.log(testing)
    res.sendStatus(200)
})

// add course
app.post('/api/course', async (req, res) => {
    let { courseID, email, expireDate } = req.body
    let professor = email.splice(0, 1)

    let p = elgamal.bigP_generation()
    let g = elgamal.g_generation(p)
    let privateKey = elgamal.privateKey_gen(p, g)
    let publicKey = elgamal.publicKey_gen(p, g, privateKey)

    let info = JSON.stringify({ p, g, publicKey })

    console.log(`New course ${courseID} created,info:\n${info}`)
    console.log(`private key:\n${privateKey}`)

    await add_course(courseID, p, g, publicKey)

    let prof_message = {
        from: "sylqiuyifeng@gmail.com",
        to: professor,
        subject: `Private key for ${courseID} online evaluation`,
        text: `This is the private key used for viewing the result of ${courseID} online evaluation:\n${privateKey}\n`
    };

    transporter.sendMail(prof_message, (err, info) => {
        if (err) {
            console.log(err)
            res.sendStatus(404)
            return
        }
    })

    for (let mail of email) {
        const tokenString = crypto.randomBytes(16).toString('hex');

        console.log(`New token for ${courseID} created:
        ${tokenString}
        `)

        await issue_token(courseID, expireDate, tokenString)

        let student_message = {
            from: "sylqiuyifeng@gmail.com",
            to: mail,
            subject: `Information for ${courseID} online evaluation`,
            text:
                `This is the token used for submitting the evaluation for ${courseID} :\n${tokenString}\nThis is the encryption info used to fill in the evaluation form\n${info}\n`
        };

        transporter.sendMail(student_message, (err, info) => {
            if (err) {
                console.log(err)
                res.sendStatus(404)
                return
            }
        })
    }

    res.sendStatus(200)
})

// add eval
app.post('/api/evaluation', async (req, res) => {
    let { courseID, tokenString, cipherText } = req.body

    let check = await get_token(courseID, tokenString)

    if (!check.toString()) {
        res.sendStatus(400)
    }
    else {
        let result = JSON.parse(check)

        if (result.currentState !== 1) {
            res.sendStatus(400)
        }
        else {
            let today = new Date();
            let addedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`

            await add_eval(courseID, tokenString, addedDate, cipherText)

            res.sendStatus(200)

        }

    }
})

// get result
app.get('/api/course/:courseID', async (req, res) => {
    var raw = JSON.stringify({ "selector": { "courseID": { "$eq": req.params.courseID } }, "fields": ["ciphertext"] });

    let requestOptions = {
        method: 'POST',
        headers:
        {
            'Content-Type': 'application/json'
        },
        body: raw
    };

    fetch("http://3.113.9.168:5984/mychannel_evaluationcontract/_find", requestOptions)
        .then(response => response.json())
        .then(async result => {
            let { docs } = result

            if (!docs.length) {
                console.log('empty')
                res.sendStatus(400)
                return
            }
            else {

                let { p, g, publicKey } = await get_course(req.params.courseID)

                let extracted = []

                for (const result of docs) {
                    extracted.push(JSON.parse(result.ciphertext))
                }

                let added = extracted.reduce((prev, current) => {
                    return add_encyption(prev, current)
                })

                res.json({ courseInfo: { p, g, publicKey }, result: added })
            }
        })
        .catch(error => console.log('error', error));
})

app.listen(port, () => console.log(`Oleval server listening on port ${port}!`))