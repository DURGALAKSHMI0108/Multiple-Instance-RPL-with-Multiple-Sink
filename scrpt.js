//THROUGHPUT,PDR,LATENCY,CONVERGENCE TIME

//PDR is calculated for all motes together
//can split it and for throughput-  use summation of all

TIMEOUT(2700000); // simulation duration in milliseconds


//PDR
num_messages_tx_c = 0; 
num_messages_rx_c = 0;


num_messages_tx_m = 0; 
num_messages_rx_m = 0;


num_messages_tx_p = 0; 
num_messages_rx_p = 0;

//throughput
//sim_time= 2700;  //in seconds

//convergence time
average = 0;
created_rpl_dag = 0;
created_rpl_dag_time = 0;
convergence_time =0;


//latency
motes = [];
motesInfo = new Object();


timeout_function = function () {
    log.log("Script timed out.\n");

    log.log("Total Messages transmitted: " + (num_messages_tx_c+   num_messages_tx_m + num_messages_tx_p)  + " \n");
    
    
    
    log.log("Total Messages received: " + (num_messages_rx_c +    num_messages_rx_m +  num_messages_rx_p)  + " \n");
    
    
    
    log.log("PDR for critical traffic:    " + ((num_messages_rx_c/num_messages_tx_c)*100) + " \n");
    
    
        
    log.log("PDR for medium critical traffic:    " + ((num_messages_rx_m/num_messages_tx_m)*100) + " \n");
    
    
    log.log("PDR for periodic traffic:    " + ((num_messages_rx_p/num_messages_tx_p)*100) + " \n");
    
    

    
    
    log.log("Number of DAGS created  :  " + created_rpl_dag + " DAGs \n");
    
    average =  created_rpl_dag_time/created_rpl_dag;
    
    log.log("Average time taken for creation of DAG :  " + average + " in microseconds\n");
    
    
    log.log("Convergence time  : " + convergence_time + " in microseconds \n");


    total = 0;
    
   
   
    for(x in motesInfo) {
        log.log("mote " + x + " with latency " + motesInfo[x]["latency"] / 1000 + " ms \n");
        
        
    
                
        
        total += motesInfo[x].latency / 1000
    }
    log.log("Average latency: " + total/motes.length + " ms \n");
    
    


    log.testOK();
}

while (true) {


    if (msg) {
        if(msg.contains("DATA send")) {
   
            
            
            switch(id)
            {
            case 1:
            case 2:
            case 3:
            case 4:           
            case 5:
            case 6:     
            case 7:
            case 8:
            case 9:
            case 10:                        
            case 11:
            case 12:   
            case 13:
            case 14:
            case 15:
            case 16:num_messages_tx_c += 1;  break; 
            
            
            
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:           
            case 23:
            case 24:     
            case 25:
            case 26:
            case 27:
            case 28:num_messages_tx_m += 1;  break;          
             
               
              
            case 29:
            case 30:
            case 31:
            case 32:
            case 33:
            case 34:           
            case 35:
            case 36:
            case 37:     
            case 38:num_messages_tx_p += 1;  break;       
                      
               	
        	}


            if(motes.indexOf(id) == -1){
                motes.push(id);
                motesInfo[id.toString()] = {"sent_time": time , "latency": 0 };
            }
            motesInfo[id.toString()].sent_time = time;
        }


        if(msg.contains("Data recv")) {

            
            
            
            
            sentMote = msg.substr(-2);
            arr = sentMote.split("");
            if(arr.indexOf(" ") != -1) sentMote = arr[1];
            
            s=parseInt(sentMote);
            
            
            switch(s)
            {
            case 1:
            case 2:
            case 3:
            case 4:           
            case 5:
            case 6:     
            case 7:
            case 8:
            case 9:
            case 10:                        
            case 11:
            case 12:   
            case 13:
            case 14:
            case 15:
            case 16:num_messages_rx_c += 1;  break; 
            
            
            
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:           
            case 23:
            case 24:     
            case 25:
            case 26:
            case 27:
            case 28:num_messages_rx_m += 1;  break;          
             
               
              
            case 29:
            case 30:
            case 31:
            case 32:
            case 33:
            case 34:           
            case 35:
            case 36:
            case 37:     
            case 38:num_messages_rx_p += 1;  break; 
            
            
            
            
               	
        	}
            
            
            
            
            
            
            if(motesInfo[sentMote.toString()]){
                sent_time = motesInfo[sentMote.toString()]["sent_time"];
	            latency = time - sent_time;
	            old_latency = motesInfo[sentMote.toString()]["latency"];
	            if(old_latency === 0)
	                motesInfo[sentMote.toString()]["latency"] = latency;
	            else{
	                latency = (latency + old_latency) / 2
	                motesInfo[sentMote.toString()]["latency"] = latency;
	            }
                //log.log(sentMote + "latency updated to: " +  motesInfo[sentMote.toString()]["latency"] + "\n");  
            }
        }



        if(msg.startsWith("created a new RPL dag")) {
            created_rpl_dag += 1;
	    created_rpl_dag_time = time;
	    convergence_time = time;
        }
         
    }

    YIELD();
}
