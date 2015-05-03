<?php

    header('Access-Control-Allow-Origin: *');
    header('Content-type: application/json');

// form the url with the word.
    $word = $_REQUEST['word'];
    $url = 'http://www.dictionaryapi.com/api/v1/references/medical/xml/' . urlencode($word) . '?key=fbec78b5-61ff-40dc-a7e0-8d51c5a42ea7';
// send the request, to the url.
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_USERAGENT, 'Codular Sample cURL Request');
    $o = curl_exec($curl);
// check if any response came
    if ($o)
    {
        // load the xml object from the response
        $res = simplexml_load_string($o);
        // convert in to json and print.
        $array = array();
        foreach ($res->entry as $e)
        {
            foreach ($e->def as $dt)
            {
                foreach ($dt->sensb as $senb)
                {
                    if (!(isset($senb->sens->dt->sd) || isset($senb->sens->dt->dxn) || isset($senb->sens->dt->dxt) || isset($senb->sens->dt->dx) || isset($senb->sens->dt->aq) || isset($senb->sens->dt->vi) || isset($senb->sens->dt->ca) || isset($senb->sens->dt->cat) || isset($senb->sens->dt->un) || isset($senb->sens->dt->sxn) || isset($senb->sens->dt->sx) || isset($senb->sens->dt->it)))
                    {
                        $array[] = array("name" => (string) $e->hw, "definition" => (string) $senb->sens->dt);
                    }
                }
            }
        }
        echo json_encode($array);
    }
    else
    {
        // throw error if not working.
        echo curl_error($curl);
    }
    curl_close($curl);
    exit();
    
?>