# Team2Oblig1

```mermaid
flowchart TD
    %% BODY: Two main columns (Nav and Main)
    subgraph Body
      direction LR
      nav[Nav Column<br>(16vw)]
      subgraph MainCol[Main Column<br>(Article Container)]
         direction TB
         header[Header Row<br>(16vh)]
         
         %% ROW 2: Three columns inside the Article Container
         subgraph Row2 [Row 2]
            direction LR
            left[Left Container Box w/Image<br>(34vw, 32vh)]
            
            %% Middle Container Box with its inner grid
            subgraph MiddleBox [Middle Container Box<br>(Inner Grid)]
               direction TB
               status[Status Box<br>(20vw, 10vh)]
               
               %% Inner Grid Row 2: Two side-by-side boxes
               subgraph MidRow2 [Row 2]
                  direction LR
                  consumption[Consumption Box<br>(9vw, 10vh)]
                  total[Total Charging Box<br>(11vw, 10vh)]
               end
               
               realtime[Real Time Power Usage Box<br>(20vw, 10vh)]
            end
            
            %% Right Container Box with its inner grid
            subgraph RightBox [Right Container Box<br>(Inner Grid)]
               direction TB
               range[Range Selector & Filter Icon<br>(30vw, 5vh)]
               
               %% Month Icons Row: Four icons side-by-side
               subgraph MonthIcons [Month Icons Row]
                  direction LR
                  icon1[Icon 1<br>(7.5vw, 15vh)]
                  icon2[Icon 2<br>(7.5vw, 15vh)]
                  icon3[Icon 3<br>(7.5vw, 15vh)]
                  icon4[Icon 4<br>(7.5vw, 15vh)]
               end
               
               minmax[Min Max Total Use Box<br>(30vw, 10vh)]
            end
         end
         
         %% ROW 3: Two columns for the lower section
         subgraph Row3 [Row 3]
            direction LR
            graph[Left Box w/Graph SVG<br>(54vw, 52vh)]
            
            %% Right Column split into two rows
            subgraph RightCol [Right Column<br>(Two Rows)]
               direction TB
               current[Current State Container Box<br>(30vw, 20vh)]
               energy[Energy Consumption Container Box<br>(30vw, 32vh)]
            end
         end
      end
    end
```
***

```plaintext
/*

****body*******************************************************************************************************************************************************************
* | nav col | main col                                                                                                                                                  | *
* | c-1     | c-2                                                                                                                                                       | *
* | (16vw)  | |-------------------------------------------------------------------------------------------------------------------------------------------------------| | *
* |         | | article container                                                                                                                                     | | *
* |         | | |---------------------------------------------------------------------------------------------------------------------------------------------------| | | *
* |         | | | header row                                                                                                                                        | | | *
* |         | | | c-2-r-1 (16vh)                                                                                                                                    | | | *
* |         | | |---------------------------------------------------------------------------------------------------------------------------------------------------| | | *
* |         | | | left container box w/image | middle container box w/ small status boxes   | right container box w/filter selection and month icon boxes           | | | *
* |         | | | c-2-r-2-c-1-b (34vw, 32vh) | c-2-r-2-c-2 has inner grid layout            | c-2-r-2-c-3 has inner grid layout                                     | | | *
* |         | | |                            | |------------------------------------------| | |-------------------------------------------------------------------| | | | *
* |         | | |                            | | status box                               | | | range selector and filter icon strip/box                          | | | | *
* |         | | |                            | | c2-ig-r1-b                               | | | c3-ig-r1                                                          | | | | *
* |         | | |                            | | (20vw, 10vh)                             | | | (30vw, 5vh)                                                       | | | | *
* |         | | |                            | |------------------------------------------| | |-------------------------------------------------------------------| | | | *
* |         | | |                            | | consumption box    | total charging box  | | | month icons                                                       | | | | *
* |         | | |                            | | c2-ig-r2c1-b       | c2-ig-r2c2-b        | | | |---------------|---------------|---------------|---------------| | | | | *
* |         | | |                            | | (9vw, 10vh)        | (11vw, 10vh)        | | | | icon-1        | icon-2        | icon-3        | icon-4        | | | | | *
* |         | | |                            | |                    |                     | | | | c3-ig-r2-c1-b | c3-ig-r2-c2-b | c3-ig-r2-c3-b | c3-ig-r2-c4-b | | | | | *
* |         | | |                            | |                    |                     | | | | (7.5vw, 15vh) | (7.5vw, 15vh) | (7.5vw, 15vh) | (7.5vw, 15vh) | | | | | *
* |         | | |                            | |                    |                     | | | |---------------|---------------|---------------|---------------| | | | | *
* |         | | |                            | |------------------------------------------| | |-------------------------------------------------------------------| | | | *
* |         | | |                            | | real time power usage box                | | | min max total use box                                             | | | | *
* |         | | |                            | | c2-ig-r3-b                               | | |  c3-ig-r3-b                                                       | | | | *
* |         | | |                            | | (20vw, 10vh)                             | | |  (30vw, 10vh)                                                     | | | | *
* |         | | |                            | |------------------------------------------| | |-------------------------------------------------------------------| | | | *
* |         | | |---------------------------------------------------------------------------------------------------------------------------------------------------| | | *
* |         | | | left box w/graph svg                                                      | right column w/ 2 rows for 2 container boxes (30vw, 52vh)             | | | *
* |         | | | c-2-r-3-c-1-b                                                             | |-------------------------------------------------------------------| | | | *
* |         | | | (54vw, 52vh)                                                              | | current state container box (30vw, 20vh)                          | | | | *
* |         | | |                                                                           | | c-2-r-3-c-2-r-1-b                                                 | | | | *
* |         | | |                                                                           | |-------------------------------------------------------------------| | | | *
* |         | | |                                                                           | | energy consumption container box (30vw, 32vh)                     | | | | *
* |         | | |                                                                           | | c-2-r-3-c-2-r-2-b                                                 | | | | *
* |         | | |---------------------------------------------------------------------------|-----------------------------------------------------------------------| | | *
* |         | |-------------------------------------------------------------------------------------------------------------------------------------------------------| | *
* |         |                                                                                                                                                           | *
***************************************************************************************************************************************************************************
*/
```
