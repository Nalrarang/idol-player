import express from 'express';
import JSSoup from 'jssoup'; 
import axios from 'axios';

const router = express.Router();

router.get('/release', (req, res) => {
    /* to be implemented */
    axios.get('http://bestgm.cafe24.com/zboard/zboard.php?category=1&id=gmsb&page=1&page_num=25&sn=off&ss=on&sc=off&keyword=mv&select_arrange=headnum&desc=asc')
    .then((result) => {
        const soup = new JSSoup(result.data);
        const tag = soup.findAll('font', 'commentnum');
        const title = tag[0];

        res.json({ success: 'success' });
    }).catch((err) => {
        console.log(err);
    })    
});






export default router;
