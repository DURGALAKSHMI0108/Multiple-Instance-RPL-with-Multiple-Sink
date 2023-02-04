
The RPL protocol has evolved to become one of the standard protocols to be used in IoT. However, the current implementation does have its prime focus on homogenous traffic. RPL creates an instance consisting of many DODAGs all with the same objective function (e.g hop count or ETX (expected transmission count)). Thus, a single instance can route homogenous traffic effectively.

Our problem statement thus shall focus on building an efficient routing mechanism for healthcare sector with heterogeneous traffic. To facilitate this, RPL is being modified to support the formation of multiple instances within a single network. 
We aim to compare the usage of Multiple RPL Instances and Multi Sink with Single RPL Instance and Single Sink against latency, control traffic overhead,
energy consumption and Packet Delivery Ratio (PDR) in Cooja Simulator. 

Packet Delivery Ratio and Latency is calculated by writting a JavaScript code in the Cooja Script editor.
The energy consumption of each node shall be calculated using the “Energest module” in Contiki-NG. This library helps to track the components of the node and prints those details as part of mote output.
The log file (indicating simulation output) is given as an input to a python script written to calculate the energy consumption with the outputted values.
