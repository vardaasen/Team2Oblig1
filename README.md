# Team2Oblig1

```mermaid
flowchart TD
  %% Outer container mimicking the overall page grid
  subgraph Container["Container\n(Grid: 16% Nav | 84% Main)"]
  
    nav[Nav Area<br/>(Background: #343a40, White Text)]
    
    subgraph Main["Main Content Area\n(Grid Rows: Header, Middle, Bottom)"]
      header[Header (Box 1)]
      
      %% Middle section (Row 2)
      subgraph Middle["Middle Section (Row 2)"]
      
        col1[Image Container<br/>(Box 2)]
        
        %% Inner grid for Column 2 of Middle Section
        subgraph InnerGrid["Inner Grid\n(Column 2)"]
          status[Status (Box 3)]
          subgraph TwoBoxes["Two Boxes\n(Row 2)"]
            consumption[Consumption (Box 4)]
            total[Total Charging (Box 5)]
          end
          power[Real Time Power Usage (Box 6)]
        end
        
        %% Right group for Column 3 of Middle Section
        subgraph RightGroup["Right Group\n(Column 3)"]
          range[Range Selector & Filter (Box 7)]
          subgraph IconGrid["Icon Grid\n(4 Icons)"]
            icon1[Icon 1 (Box 8)]
            icon2[Icon 2 (Box 9)]
            icon3[Icon 3 (Box 10)]
            icon4[Icon 4 (Box 11)]
          end
          summary[Min/Max Total Use (Box 12)]
        end
        
      end
      
      %% Bottom section (Row 3)
      subgraph Bottom["Bottom Section (Row 3)"]
        graph[Graph SVG (Box 13)]
        subgraph RightStack["Right Stack\n(Two Stacked Boxes)"]
          current[Current State (Box 14)]
          energy[Energy Consumption (Box 15)]
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
