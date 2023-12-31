# InstaShop
<img width="200" alt="Screenshot 2023-10-22 at 7 44 54 AM" src="https://github.com/AnshulShirude/InstaShop/assets/34725764/3c49e7b7-f6fd-4718-9d39-cc630a42328e">

**An efficient and new way to shop!**

## Inspiration
We've all been in the situation where we've ran back and forth in the store, looking for a single small thing on our grocery list. We've all been on the time crunch and have found ourselves running back and forth from dairy to snacks to veggies, frustrated that we can't find what we need in an efficient way. This isn't a problem that just extends to us as college students, but is also a problem which people of all ages face, including parents and elderly grandparents, which can make the shopping experience very unpleasant. InstaShop is a platform that solves this problem once and for all.

## What it does
Input any grocery list with a series of items to search at the Target retail store in Boston. If the item is available, then our application will search the Target store to see where this item is located in the store. It will add a bullet point to the location of the item in the store. You can add all of your items as you wish. Then, based on the store map of the Target, we will provide the exact route that you should take from the entrance to the exit to retreive all of the items in the most efficienty way.

## How we built it
Based off of the grocery list, we trigger the Target retail developer API to search for a certain item and retrieve the aisle number of the location within the given store. Alongside, we also wrote classes and functions to create and develop a graph with different nodes to mock the exact layout of the store. Then, we plot the exact location of the given item within the map. Once the user is done inputting all of the items, we will use our custom dynamic programming algorithm which we developed using a variance of the Traveling Salesman algorithm along with a breadth first search. This algorithm will return the shortest path from the entrance to retrieving all of your items to the exit. We display the shortest path on the frontend.

## Challenges we ran into
One of the major problems we ran into was developing the intricacies of the algorithm. This is a very much so convoluted algorithm (as mentioned above). Additionally, setting up the data structures with the nodes, edges, and creating the graph as a combination of the nodes and edges required a lot of thinking. We made sure to think through our data structure carefully and ensure that we were approaching it correctly and could run the algorithm that we implemented on it.

## Accomplishments that we're proud of
According to our approximations in acquiring all of the items within the retail store, we are extremely proud that we improved our runtime down from 1932! * 7 / 100! minutes to a few seconds. Initially, we were performing a recursive depth-first search on each of the nodes to calculate the shortest path taken. At first, it was working flawlessly on a smaller scale, but when we started to process the results on a larger scale (10*10 grid), it took around 7 minutes to find the path for just one operation. Assuming that we scale this to the size of the store, one operation would take 7 divided by 100! minutes and the entire store would take 1932! * 7 / 100! minutes. In order to improve this, we run a breadth-first search combined with an application of the Traveling Salesman problem developed in our custom dynamic programming based algorithm. We were able to bring it down to just a few seconds. Yay!

## What we learned
We learned about optimizing algorithms and overall graph usage and building an application from the ground up regarding the structure of the data.

## What's next for InstaShop
Our next step is to go to Target and pitch our idea. We would like to establish partnership with many Target stores and establish a profitable business model that we can incorporate with Target. We strongly believe that this will be a huge help for the public.
