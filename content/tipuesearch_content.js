var tipuesearch = {"pages": [{'title': 'About', 'text': '利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': '組員名單', 'text': '40723104\xa0 \xa0 https://s40723104.github.io/cd2020/content/index.html 40723107 \xa0 \xa0 https://s40723107.github.io/cd2020/content/index.html 40723114 \xa0 (group leader)\xa0\xa0 https://s40723114.github.io/cd2020/content/index.html 40723115 \xa0 \xa0 https://s40723115.github.io/cd2020/content/index.html 40723118 \xa0\xa0 https://s40723118.github.io/cd2020/content/index.html 40723122\xa0 \xa0 https://s40723122.github.io/cd2020/content/index.html 40723123\xa0\xa0 https://s40723123.github.io/cd2020/content/index.html 40723140\xa0\xa0 https://s40723140.github.io/cd2020/content/index.html 40723149 \xa0\xa0 https://s40723149.github.io/cd2020/content/index.html 40723151\xa0 \xa0 https://s40723151.github.io/cd2020/content/index.html 40723153 \xa0 \xa0 https://s40723153.github.io/cd2020 40723154 \xa0\xa0 https://s40723154.github.io/cd2020/content/index.html 40723155 \xa0\xa0 https://s40723155.github.io/cd2020/content/index.html \n \n', 'tags': '', 'url': '組員名單.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n 此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n', 'tags': '', 'url': 'Develop.html'}, {'title': '可攜系統', 'text': '先創可攜系統的目錄\xa0 ”CD2020”\xa0 ，在\xa0 CD2020\xa0 的目錄下新增\xa0 ”data” 。 \n Python 3.8.2 到\xa0 https://www.python.org/downloads/release/python-382/ \xa0 搜尋 ”Windows x86-64 executable installer” 並下載 ”Windows x86-64 executable installer” ，下載完後，執行 python-3.8.2-amd64.exe \n PortableGit： https://git-scm.com/download/win \xa0下載 64-bit Git for Windows Portable 安裝在 data 目錄下 \n MSYS2： https://www.msys2.org/ \xa0下載\xa0msys2-x86_64-20190524.exe 並安裝在 data/msys64 的目錄下 \n SciTE： https://www.scintilla.org/SciTEDownload.html \xa0下載 full 64-bit download，解壓縮檔案至 data/wscite432，就是可以直接執行的 Scite.exe 編輯器，若希望以 UtF-8 編碼開啟文件，就必須啟用 Options 下拉式功能表中的 Global Options File（同\xa0SciTEGlobal.properties 檔案）其中的預設值 code.page=0 （為Windows 內定的 Big-5 編碼）修改設定為 code.page=65001，表示使用使 UTF-8 編碼，若要開啟即時更新內容，將load.on.activate=1 前面的井字號拿掉，就會即時更新了（SciTE 須重啟） 修改成 UTF-8 編碼 修改成即時更新 \n 在 data 目錄下新增 ”home” 目錄，開啟SciTE \n start.bat(儲存在CD2020目錄底下) \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n \n \n \n @echo off \n set Disk=y \n subst %Disk%: "data" \n \xa0 \n %Disk%: \n \xa0 \n set HomePath=%Disk%:\\home \n set HomeDrive=%Disk%:\\home \n set Home=%Disk%:\\home \n set USERPROFILE=%Disk%:\\home \n \xa0 \n REM 將系統 Python 程式的 io 設為 utf-8 \n set PYTHONIOENCODING="utf-8" \n \xa0 \n #REM for putty \n #Set GIT_HOME=%CDisk%:\\portablegit\\bin\\ \n #Set GIT_SSH=%Disk%:\\putty\\plink.exe \n \xa0 \n set PYTHONPATH=%Disk%:\\py382\\DLLs;%Disk%:\\py382\\Lib;%Disk%:\\py382\\Lib\\site-packages; \n set PYTHONHOME=%Disk%:\\py382 \n \xa0 \n set path_python=%Disk%:\\py382;%Disk%:\\py382\\Scripts; \n set path_msys2=%Disk%:\\msys64\\mingw64\\bin; \n set path_git=%Disk%:\\portablegit\\bin; \n set path_tcc=%Disk%:\\tcc; \n \xa0 \n path=%Disk%:;%path_python%;%path_msys2%;%path_git%;%path_tcc%; \n \xa0 \n start /MIN cmd.exe \n start /MIN cmd.exe \n start /MIN cmd.exe \n start /MIN cmd.exe \n \xa0 \n start /MIN %Disk%:\\wscite432\\wscite\\SciTE.exe \n start /MIN %Disk%:\\wscite432\\wscite\\SciTE.exe \n \xa0 \n Exit \n \n \n \n \n \n \n \n stop.bat(儲存在CD2020目錄底下) \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n \n \n \n @echo off \n set Disk=y \n path=%PATH%; \n \xa0 \n taskkill /IM python.exe /F \n taskkill /IM pythonw.exe /F \n taskkill /IM scite.exe /F \n \xa0 \n REM 終止虛擬硬碟與目錄的對應 \n subst %Disk%: /D \n REM 關閉 cmd 指令視窗 \n taskkill /IM cmd.exe /F \n \xa0 \n EXIT \n \n \n \n \n \n MSYS2： https://www.msys2.org/ \xa0 下載 \xa0 msys2-x86_64-20190524.exe \xa0 並執行 選擇CD2020\\data\\msys64的目錄，最後反選 Run MSYS2 64bit now選項，finish 等PortableGit安裝完成重啟可攜，測試。 \n \n \n Tiny C Compiler： https://github.com/TinyCC/tinycc \xa0git clone 整個倉儲到 data 目錄下並命名目錄為 tcc \n Jupyterlab： https://github.com/jupyterlab/jupyterlab \xa0pip install jupyterlab==2.0.1 自動執行安裝 \n 安裝pip： 到 https://bootstrap.pypa.io/get-pip.py 頁面，滑鼠右鍵另存新檔到CD2020/data執行 使用pip安裝flask,bs4,xml,elican, mrkdown,flask_cors,leo模組 安裝過程若出現紅字，請重新執行一次模組安裝指令，應該會正常安裝。 \n Fossil SCM： https://www.fossil-scm.org/ \xa0下載 fossil scm 解壓縮後將 fossil.exe 放到 data 目錄下 \n Flutter： https://github.com/flutter/flutter\xa0 \xa0(在 data 目錄底下 git clone https://github.com/flutter/flutter.git -b stable) \n CoppeliaSim： https://www.coppeliarobotics.com/winVersions \xa0下載\xa0 CoppeliaSim Edu, Binaries \xa0解壓縮後放到 data 目錄下 \n home/home_mdecourse：存放 ssh 的資料和.gitconfig \n tmp：放 clone 下來的倉儲 \n ShareX： https://getsharex.com/downloads/ \n putty： 老師整理的 putty \xa0 下載 putty 放到data裡面，把之前的ssh和.gitconfig放到home裡面測試是否可以成功用ssh推送資料。 \n \n 基礎可攜系統 下載 有配置Webots 有配置Webots+ CoppeliaSim ( CoppeliaSim V4.0.0 ，含 xelatex) P.S. 可以下載可攜系統的leo都已經升級到6.2.1版本了 \n', 'tags': '', 'url': '可攜系統.html'}, {'title': 'WORK', 'text': '', 'tags': '', 'url': 'WORK.html'}, {'title': 'Work1', 'text': '', 'tags': '', 'url': 'Work1.html'}, {'title': 'webots設定', 'text': 'MSYS2裡建立Windows 64位元環境下gcc編譯環境，安裝 mingw-w64-x86_64-gcc 與 mingw-w64-x86_64-toolchain。 \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n \n \n \n <!-- 安裝 mingw-w64-x86_64-gcc --> \n pacman -S mingw-w64-x86_64-gcc \n <!-- 安裝 mingw-w64-x86_64-toolchain --> \n pacman -S mingw-w64-x86_64-toolchain \n \n \n \n \n \n \n \n 安裝完成後，測試編譯以下簡單的 C 程式： \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n \n \n \n // hello.c \n #include <stdio.h> \n \xa0 \n int   main() { \n \xa0\xa0\xa0\xa0 printf ( "Hello, world!\\n" ); \n \xa0\xa0\xa0\xa0 return   0; \n } \n \n \n \n \n \n \n \n 存在 tmp\\c_ex 目錄下，命名為 hello.c然後利用： \n \n \n \n \n \n \n 1 \n \n \n \n gcc -o hello.exe hello.c \n \n \n \n \n \n \n \n 表示要將編譯 hello.c 的 output 設為 hello.exe 完成後，直接執行 hello.exe \n', 'tags': '', 'url': 'webots設定.html'}, {'title': 'Work2', 'text': '', 'tags': '', 'url': 'Work2.html'}, {'title': 'xelatex', 'text': '到\xa0 https://miktex.org/download \xa0下載，載下來的檔案重新命名為\xa0 miktex-portable.exe ，再執行安裝。在 start.bat 納入 Y:\\miktex-portable\\texmfs\\install\\miktex\\bin\\x64 搜尋路徑，開啟隨身系統後，確定可以執行 xelatex。 \n \n \n \n \n \n \n 1 \n \n \n \n set path_xelatex=%Disk%:\\miktex-portable\\texmfs\\install\\miktex\\bin\\x64; \n \n \n \n \n \n \n \n 將下列 LaTeX 存為 article.tex \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n \n \n \n % UTF-8 encoding \n % Compile with latex+dvipdfmx, pdflatex, xelatex or lualatex \n % XeLaTeX is recommanded \n \\documentclass{article} \n \\usepackage{xeCJK} \n \\setCJKmainfont{SimSun} \n \\begin{document} \n \\LaTeX 文章内容。 \n \\end{document} \n \n \n \n \n \n \n \n 利用 \n \n \n \n \n \n \n 1 \n \n \n \n xelatex article.tex \n \n \n \n \n \n \n \n 再測試 \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n \n \n \n \\documentclass[]{article} \n \xa0 \n \\usepackage{graphicx} \n \\usepackage{xeCJK} \n \\setCJKmainfont{SimSun} \n \xa0 \n \\begin{document} \n \xa0 \n 90 degree rotation \\rotatebox[origin=c]{90}{MDE 機械設計.} \n \xa0 \n Vertical Flip \\scalebox{1}[-1]{NFU 虎尾科大.} \n \xa0 \n Horizontal Flip \\scalebox{-1}[1]{台灣 Taiwan.} \n \xa0 \n \\end{document} \n \n \n \n \n \n \n \n CoppeliaSim： \n 下載 \xa0 CoppeliaSim Edu, Binaries 的版本，把資料放到可攜系統下 \n', 'tags': '', 'url': 'xelatex.html'}, {'title': 'Work3', 'text': '', 'tags': '', 'url': 'Work3.html'}, {'title': '瞭解四輪機器人', 'text': '首先翻譯我們覺得比較有實用的內容 \n 可碰撞物體 (Collidable objects) \n 可碰撞對像是可以測試互相碰撞的對象，即將記錄碰撞狀態的對象。這並不意味著它們將對碰撞做出響應（即可響應），這有所不同。可碰撞的對象包括： \n \xa0 假人 \n 形狀 \n 超頻樹 \n 點雲 \n 由於基於點，因此虛擬對象和點雲只能與 OC 樹（基於體積）碰撞。 \n 集合也是可碰撞的，因為它們可能包含可碰撞的對象。 \n 可碰撞對象可以分別啟用或禁用其可碰撞屬性（默認情況下，對於非純形狀， OC 樹和點雲啟用）。可以在對象的公共屬性中或通過 sim.setObjectSpecialProperty API 函數進行設置。 \n 此外，可碰撞對象可以根據其相關的模型屬性（如果它們是模型的一部分）被覆蓋其可碰撞屬性。 \n \xa0 \n 可測對象 (Measurable objects) \n 可測量對像是可用於與其他可測量對象進行最小距離計算的對象。它們包括： \n \xa0 假人 \n 形狀 \n 超頻樹 \n 點雲 \n 集合也是可測量的，因為它們可能包含可測量的對象。 \n 可測量對象可以分別啟用或禁用其可測量屬性（默認情況下，對於非純形狀， OC 樹和點雲啟用）。可以在對象的公共屬性中或通過 sim.setObjectSpecialProperty API 函數進行設置。 \n 此外，可測量對象可以根據其相關的模型屬性（如果它們是模型的一部分）而覆蓋其可測量屬性。 \n \xa0 \n 可檢測物體 (Detectable objects) \n 可檢測物體是可以被接近傳感器檢測到的物體。它們包括： \n 假人 \n 形狀 \n 超頻樹 \n 點雲 \n 由於是基於點的虛擬和點雲，因此射線類型或隨機類型的接近傳感器無法檢測到。 \n 可以通過所有接近傳感器，或僅通過特定類型的接近傳感器或接近傳感器的子類別來檢測可檢測到的物體，如下所示： \n 超聲波接近傳感器 \n 紅外接近傳感器 \n 激光接近傳感器 \n 電感式接近傳感器 \n 電容式接近傳感器 \n 集合也是可檢測的，因為它們可能包含可檢測的對象。 \n 可檢測的對象可以分別啟用或禁用其可檢測屬性，並且對於所有類型的接近傳感器（默認情況下對非純形狀啟用）都啟用此屬性。可以在對象的公共屬性中或通過 sim.setObjectSpecialProperty API 函數進行設置。 \n 此外，可檢測對象可以根據其相關的模型屬性（如果它們是模型的一部分）被覆蓋其可檢測屬性。 \n \xa0 \n 可渲染對象 (Renderable objects) \n 可渲染對像是視覺傳感器可以看到或檢測到的對象。它們包括： \n 形狀 \n 路徑（但是必須啟用路徑整形功能） \n 圖形（僅呈現非靜態 3D 曲線） \n 超頻樹 \n 點雲 \n 集合也是可渲染的，因為它們可能包含可渲染的對象。 \n 您可以使可渲染對象僅由特定的視覺傳感器看到可渲染對像還可以分別啟用或禁用其 renderable 屬性（默認情況下啟用，純圖形除外）。可以在對象的公共屬性中或通過 sim.setObjectSpecialProperty API 函數進行設置。 \n 此外，可渲染對象可以根據其相關的模型屬性（如果它們是模型的一部分）而使其可渲染屬性被覆蓋。 \n \xa0 \n 可視對象 (Viewable objects) \n 可見對像是可以瀏覽，查看或可以顯示某些圖像內容的對象。它們包括： \n 攝影機 \n 視覺傳感器 \n 可視對象可以與將顯示其圖像內容的視圖關聯。 \n \xa0 \n 虛擬功能 (Dummy functions) \n 假人是多用途的對象。它們可以具有非常特定的功能，也可以僅用作輔助對象。以下偽函數是常見的： \n 用作點或參考系統：當您要跟蹤場景中特定點的位置和 / 或方向時，就是這種情況。虛擬位置可以與形狀頂點的位置匹配，例如，可以精確定位形狀：在頂點編輯模式下，從頂點創建虛擬對象，然後將形狀附加到虛擬對象（使虛擬對象成為父對象））。並且可以通過虛擬對象來操縱 / 定位形狀，該虛擬對象的位置與所選頂點相同。 \n 用作模型的代理或支持對象：通過將對象標記為模型基礎標誌來定義模型。任何對像都可以作為模型的基礎，但是虛擬對像是該模型的首選對象。 \n 用作標記點：例如，在評估機器人的工作空間時，可以在不同的時間間隔將假人放置在與機器人末端執行器相同的坐標上，最後可以提取所有添加的假人的凸包並顯示。有關更多詳細信息，請參閱凸包計算部分。 \n 用於指定逆運動學計算中的末端執行器和末端執行器目標位置 / 方向：逆運動學計算模塊處理運動鏈。每個鏈都有一個基礎對象和一個提示對象。尖端對象必須是假人，並且用戶經常將尖端假人定位和定向為與機器人的末端執行器重合。同時，為了以逆運動學模式移動運動鏈，需要機器人末端執行器的目標位置 / 方向。同樣，將虛擬對像用作目標對象。 \n 用於為動態模擬的機制創建循環閉合約束：有關更多詳細信息，請參考設計動態模擬的部分。 \n 用作路徑跟隨對象：虛擬對像是唯一可以分配留在路徑上（在路徑上自由，自由滑動）或跟隨路徑位置（固定在路徑上，沿著路徑在其當前固有位置固定）的對象。 \n \n \n 虛擬屬性 (Dummy properties) \n 虛擬屬性是場景對象屬性對話框的一部分，該對話框位於 [ 菜單欄 -> 工具 -> 場景對象屬性 ] 。還可以通過雙按場景層次結構中的對像圖標或單按其工具欄按鈕來打開對話框： \n \n 在場景對象屬性對話框中，單按“虛擬”按鈕以顯示虛擬對話框（“虛擬”按鈕僅在最後選擇的是虛擬對象時出現）。該對話框顯示最後選擇的虛擬對象的設置和參數。如果選擇了多個假人，則可以將某些參數從最後選擇的假人復製到其他選定的假人（適用於選擇按鈕）： \n \n 鏈接的虛擬對象：鏈接到此對象的虛擬對象。鏈接的虛擬對象（在場景和場景層次中，通過鏈接它們的彩色段很容易識別）具有特殊的屬性和行為，有關更多詳細信息，請參閱下一項。 \n 鏈接類型：鏈接類型將指定仿真期間鏈接的虛擬對象的行為。如果指定了“動力學，重疊約束”，則這兩個虛擬實體將嘗試重疊各自的位置 / 方向以創建動力學迴路閉合約束。如果指定了 IK ，則指定了刀尖目標，則兩個鏈接的虛擬對象形成了用於反向運動學計算的刀尖目標對。 \n 遵循主路徑的方向（唯一副路徑）：如果選中，則以路徑作為主（唯一副路徑）的虛擬對象將遵循該路徑的最接近貝塞爾曲線點的方向（而不是位置）。 另請參閱 sim.followPath API 函數（使用 sim.followPath 函數，不需要將虛擬對象與路徑作為主從關係）。 \n 遵循主路徑 ( 唯一主路徑 ) ：如果選中該選項，並且假人的主路徑是路徑對象，則假人的位置和方向將由該路徑自動計算（即將從路徑的 Bezier 點進行插值）。 \n 有兩種選擇：路徑自由或路徑固定。另請參閱 sim.followPath API 函數（使用 sim.followPath 函數，不需要將虛擬對象與路徑作為對象）。 \n 路徑上自由：選中該對像後，會將具有路徑對像作為對象的虛擬對象分配為留在路徑上（保持與路徑的 Bezier 點相同的位置和方向），但可以沿路徑自由移動。它可以通過對像操縱模式沿路徑移動，也可以由逆運動學模塊自動沿路徑引導。 \n 固定在路徑上：選中此選項後，會將具有路徑對像作為對象的虛擬對象分配為留在路徑上（與路徑的 Bezier 點保持相同的位置和方向），位於路徑的固有位置。一個比喻是在過山車的履帶部分上的貨車（將貨車拉起的初始部分）。在這種情況下，可以指定從路徑位置偏移的距離。 \n 偏移量：將假人分配到路徑上的固定位置時，與路徑位置的距離偏移量。如果要創建履帶，則履帶的第一個墊板（剛性元件）將位於偏移量 0 處，第二個墊板將位於偏移量 x 處，第二個墊板將位於偏移量 2x 處，依此類推。 \n 複製增量：添加到復制的虛擬對象的偏移量上的值（請參見上文）（例如，在創建毛毛蟲時，您可能需要幾十個墊板，每個墊板都可以自動計算出不同的偏移量）。 \n 對像大小：假人的大小。該參數僅具有視覺效果，沒有功能意義。 \n 調整虛擬顏色：允許調整虛擬顏色 \n \xa0 \n 接近傳感器 (Proximity sensors) \n CoppeliaSim 提供了一種非常強大而有效的方法來模擬接近傳感器。用戶可以為幾乎所有類型的接近傳感器建模，從超聲波到紅外等等。允許此功能的場景對像是接近傳感器（與視覺傳感器不同），可以檢測可檢測到的實體。下圖說明了使用接近傳感器的仿真： \n \n 接近傳感器通過 [ 菜單欄 -> 添加 -> 接近傳感器 ] 添加到場景中。 \n 接近傳感器使用的接近傳感器檢測例程也可以通過 Coppelia 幾何例程作為獨立例程使用。 \n \xa0 \n 接近傳感器的類型和操作模式 (Proximity sensor types and mode of operation) \n 接近傳感器有 6 種不同類型，可以在很大程度上進行定制： \n 射線型：射線型接近傳感器非常適合非常簡單的接近傳感器建模或激光測距儀建模。它們是最快的接近傳感器。 \n 隨機射線型：隨機射線型接近傳感器用作隨機掃描圓錐體的射線型傳感器。它的外觀與錐形接近傳感器類似。 \n 金字塔型：金字塔型接近傳感器非常適合對帶有矩形檢測體積的接近傳感器進行簡單建模。他們很快。 \n 圓柱型：圓柱型接近傳感器非常適合對具有旋轉體積的檢測體積的接近傳感器進行簡單建模。他們很快。 \n 圓盤式：圓盤式接近傳感器可對具有旋轉掃描檢測體積的接近傳感器進行精確建模。根據所選的精度和操作模式，它們可能需要更多的計算量。 \n 圓錐型：圓錐型接近傳感器允許對大多數接近傳感器進行最佳，最精確的建模。根據所選的精度和操作模式，它們可能需要更多的計算量。 \n \xa0 \n 接近傳感器以幾何上精確的方式運行：它們在其感測點（小球體）與任何干擾其檢測體積的可檢測實體之間執行精確的距離計算（像大多數傳感器一樣，它們在傳感體積邊緣之間不執行簡單的碰撞檢測其他模擬軟件，但在檢測範圍內進行精確的距離計算）。每個接近傳感器將計算以下最小距離： \n \n 如果接近傳感器檢測到物體，則會激活觸發器，這將導致對觸發器回調函數的調用。 \n 接近傳感器的計算結果可以通過圖形對象記錄。 \n \xa0 \n 視覺傳感器 (Vision sensors) \n 除了接近傳感器之外， CoppeliaSim 還提供另一種傳感器：視覺傳感器。視覺傳感器是可見的對象，其操作方式與攝影機對象非常相似：它們將渲染其視場中的對象，並在指定的閾值被過度拍攝或拍攝不足時觸發檢測。可以檢測可渲染實體的視覺傳感器應主要在顏色，光線或結構在檢測過程中起作用的情況下，在接近傳感器上使用（例如，紅外傳感器，或更籠統地說，對光敏感的傳感器（相機等））。但是，根據運行應用程序的圖形卡或場景對象的複雜程度，視覺傳感器可能會比接近傳感器慢一些。下圖說明了使用視覺傳感器的應用： \n \xa0 \n 確保不要將視覺傳感器與相機混淆。以下是主要區別： \n 視覺傳感器具有固定的分辨率。相機沒有特定的分辨率（即，它會自動調整為視圖尺寸）。 \n 視覺傳感器的圖像內容可通過 API 訪問，圖像處理可通過視覺回調函數進行處理。無法通過 API 直接獲得相機的圖像內容。 \n 視覺傳感器通常比攝像頭需要更多的 CPU 時間並且運行速度較慢。 \n 視覺傳感器只能顯示可渲染的對象。攝像機可以顯示所有對像類型。 \n \xa0 \n 視覺傳感器類型和操作模式 (Vision sensor types and mode of operation) \n 視覺傳感器分為 2 種類型，可以針對不同目的進行調整： \n 正射投影型：正射投影型視覺傳感器的視場為矩形。它們非常適合於近距離紅外傳感器或激光測距儀。 \n 透視投影型：透視投影型視覺傳感器的視場是梯形的。它們非常適合於相機型傳感器。 \n \n 視覺傳感器是可見的對象，可以像相機對像一樣進行瀏覽 [ 彈出菜單 -> 視圖 -> 將視圖與選定的視覺傳感器相關聯 ] 。有關更多詳細信息，另請參見頁面和視圖部分。 \n \xa0 \n 視覺傳感器功能強大，可以以多種靈活方式使用。例如，它們可以用於顯示來自外部應用程序或插件的靜止或運動圖像。插件還可以提供定制的圖像處理算法以及評估算法（例如觸發條件）。視覺回調函數代表了可以進行圖像處理以及可以生成觸發器的機制（可以對觸發器回調函數中的觸發器做出反應）。 \n 視覺傳感器只能渲染（和檢測）可渲染的實體。 \n 力傳感器 (Force sensors) \n 力傳感器最初是兩個形狀之間的剛性鏈接，能夠測量傳遞的力和扭矩。力傳感器的剛性是有條件的，在某種意義上，如果出現某種條件（例如，如果力或扭矩閾值被超過），則力傳感器可能會損壞。 \n \xa0 \n 力傳感器測量三個 3 對值，分別代表沿 x ， y 和 z 軸施加在傳感器上的力以及圍繞 x ， y 和 z 軸施加在傳感器上的扭矩： \n \n 最初，力傳感器充當剛性連接。然而，在模擬過程中，當超過指定的力 / 扭矩閾值或滿足某些其他用戶定義的條件時，力傳感器可能會損壞。下圖說明了力傳感器的損壞狀態： \n \xa0 \n 如果動態啟用了力傳感器，則它只能在仿真期間運行。 有關動態啟用的力傳感器的更多信息，另請參閱有關設計動態仿真的部分。 關節也能夠測量力或扭矩，但是只能沿/繞其z軸測量。 \n 力傳感器通過[菜單欄->添加->力傳感器]添加到場景中。 \n \n 路徑 (Paths) \n 路徑是定義空間中的路徑或軌蹟的對象。它可以用於各種任務，如下圖所示： \n \xa0 \n 可以使用 [ 菜單欄 -> 添加 -> 路徑 ] 將路徑對象添加到場景中。默認情況下，有兩個基本路徑可用：簡單的段類型路徑或圓形類型路徑。它們可以定向或縮放，但是通常這還不夠。用戶可以使用幾種方法來生成定制的路徑對象： \n 從文件導入路徑。 \n 編輯路徑。 \n 從形狀的邊緣生成路徑。有關詳細信息，請參見邊緣編輯模式。 \n 路徑本身並沒有多大作用。它們通常與假人和其他物體結合使用以獲得所需的效果。要沿路徑移動對象，首先需要將虛擬對象分配給路徑，然後可以將對象附著到虛擬對象，該對象將遵循路徑的固有移動。有關更多詳細信息，請參閱關於虛擬變量的部分。 \n 路徑是可渲染的對象，這意味著視覺傳感器可以看到路徑。但是，需要啟用路徑整形功能。可以在對象公共屬性中更改路徑的可渲染屬性。 \n 某些路徑數據可以由圖形對象記錄。 \n \n 路徑控制點和貝塞爾曲線點 (Control points and Bezier points) \n 路徑具有位置和方向分量（或通道），還可以另外具有描述速度曲線的分量。路徑由控制點定義，這些控制點將路徑描述為一系列鏈接的段。僅當選擇路徑時，控制點才可見： \n \n 路徑的第一個控制點（起點）表示為球體，其餘的控制點表示為立方體。路徑可以是開放的或封閉的。當關閉時，它變成循環的。 \n \n 每個控制點都具有可以更詳細地描述路徑的屬性：每個控制點都可以描述是否以及如何計算貝塞爾曲線。 \n \n 默認情況下，貝塞爾曲線點始終可見（即使未選擇對象時），並顯示為紅色，綠色和藍色的小箭頭，指示貝塞爾曲線點的 x 軸， y 軸和 z 軸（實際上是取向）。貝塞爾曲線部分由 3 個參數描述 \n \xa0 \n Bezier 插值因子指示 Bezier 曲線部分的起點和終點，而 Bezier 點數指示曲線的詳細程度（或平滑度）。 \xa0 Bezier 點計數為 1 在技術上禁用了 Bezier 曲線插值機制，但為簡單起見，該控制點被稱為 Bezier 點。 \n 可以在路徑編輯模式下手動調整控制點的位置和方向。但是不能單獨調整 Bezier 點的方向。它是自動計算的。默認情況下，貝塞爾曲線點的方向將遵循路徑曲率（如果啟用了自動方向選項），否則它們將與控制點的方向進行插值 \n \xa0 \n \xa0 \n 路徑位置和長度計算方法 (Path position and length calculation methods) \n 沿著路徑對象，可以定義固有位置。該位置（也稱為路徑位置）與路徑對象的位置不同。雖然路徑對象的位置是路徑對象原點的位置（在選擇路徑時顯示為白色線框立方體），但是路徑位置或固有路徑位置是沿路徑的位置值 \n \xa0 \n 路徑的 Bezier 點可以是不同的，也可以是重合的：想像一個焊接機器人，其末端執行器是焊接設備的尖端；在兩個連續的 Bezier 點之間，末端執行器可以： \xa0 \n 在不改變方向的情況下執行平移（即沿著直線）（兩個 Bezier 點是不同的，但方向相同）。 \n 執行平移並更改方向（兩個 Bezier 點是不同的，並且方向不同）。 \n 在不改變位置的情況下執行旋轉（即更改方向）（兩個 Bezier 點重合但方向不同）。 \n 此外，在某些情況下，我們希望焊炬遵循預定的路徑，在某個特定位置暫停（例如，處理較大的焊接點），然後沿該路徑繼續前進。為了正確處理上述 3 種情況和特殊的暫停情況，重要的是能夠唯一地識別沿路徑（即路徑位置 * ）的任何位置 * （廣義上的位置）以及路徑長度 * （從更廣泛的意義上講是長度）。為此，用戶可以選擇幾種位置計算方法： \n \xa0 \n 路徑位置 * 被描述為沿路徑的累積線性變化。路徑長度 * 由下式給出： \n 路徑位置 * 被描述為沿路徑的累積角度 ** 變化。路徑長度 * 由下式給出： \n 路徑位置 * 被描述為沿路徑的累積（線性變化 + 角度 ** 變化）。路徑長度 * 由下式給出： \n 路徑位置 * 被描述為沿路徑的累積最大值（線性變化，角度 ** 變化）。路徑長度 * 由下式給出： \n 路徑位置 * 被描述為沿路徑的累積（線性變化，如果不為零，否則為角度 ** ）。路徑長度 * 由下式給出： \n 路徑位置 * 被描述為沿路徑的累積（角度 ** 變化，如果不為零，否則為線性變化）。路徑長度 * 由下式給出： \n 路徑位置 * 被描述為沿路徑的（線性變化，角度 ** 變化）的累積歐幾里德距離。路徑長度 * 由下式給出： \n \xa0 \n 其中Δ l 和Δα分別是兩個連續的 Bezier 點之間的線性和角度變化。角度 ** 變化是規則角度變化乘以角度係數 c 。 \xa0 c 稱為角度到線性的轉換係數，並且可以將角度值和線性值組合在一起。這意味著沿路徑的位置 * 或路徑長度 * 始終以線性單位（例如米）給出，而與上面選擇的位置計算方法無關。 \n 默認情況下，紅色標記的項為零。該術語可以看作是 Bezier 點（或路徑控制點）的虛擬距離或第四坐標（即每個 Bezier 點將由方向和位置（ x ， y ， z ， w ）定義，其中 w 是第四坐標）。這對於沿路徑歸檔暫停點很有用。是兩個連續的 Bezier 點之間的虛擬距離變化。 \xa0 d 是虛擬距離變化的比例因子（例如，如果 d 加倍，則所有暫停點的暫停持續時間將是兩倍）。為簡化起見，在以下內容中我們將不再提及該術語並將其設為零。 \n 以下示例闡明了位置和長度計算概念： \n \xa0 \n \n \n \n \n 要歸檔沿路徑的特定點處的運動暫停，請執行以下操作：創建 3 個相同的路徑控制點（位置和方向完全重合），並為中間控制點指定一個虛擬距離值，該值不得為零。在下面的示例中，在 3 個重合點的虛擬距離為 2 （在第一和中間重合控制點之間為 1 ，在中間和第三重合控制點之間為 1 ）。如果某個對像以每秒 1 米的速度沿路徑行進，則它將在重合的控制點處記錄 2 秒的暫停： \n \xa0 \n \xa0 \n 沿路徑運動 (Movement along a Path) \n 當前固有路徑位置在路徑上顯示為紅色球形（如果啟用了路徑位置顯示）。在模擬過程中，可以隨時使用 sim.setPathPosition 來控制球沿路徑的位置。確保了解如何計算路徑位置或路徑長度。 \n 要實際使對象沿路徑移動，首先需要將對象附加到虛擬對象，然後分配虛擬對像以遵循路徑位置（帶有可選的偏移量）。 \n \xa0 \n 導入和導出路徑 (Importing and exporting paths) \n 路徑導入 / 導出功能可在 CSV 文件（逗號分隔值）上運行，該 CSV 文件可以用簡單的文本編輯器創建或讀取，但也可以輕鬆地導入 / 導出到 Microsoft Excel 等應用程序中。 \n 導入路徑 \n CoppeliaSim 的導入功能（ [ 菜單欄 -> 文件 -> 導入 -> CSV 的路徑 ...] ）逐行讀取值，其中每行對應一個控制點。每行應採用以下格式設置： \n \xa0 x ， y ， z ， alpha ， beta ， gamma ， relativeVelocity ， BezierPointCount ， interpolationFactor1 ， interpolationFactor2 ， \n \xa0virtualDistance ， auxiliaryFlags ， auxiliaryChannel1 ， auxiliaryChannel2 ， auxiliaryChannel3 ， auxiliaryChannel4 \n 其中內容相對應的意思： \xa0 \n （ x ， y ， z ）表示控制點在 METERS 中的位置 \n （α，β，γ）表示控制點的方向，以度數表示為歐拉角。默認值為（ 0,0,0 ）。 \n 相對速度已棄用。設為 1.0 \n BezierPointCount 是控制點所需的 Bezier 點數。默認值為 1 。 \n InterpolationFactor1 和 InterpolationFactor2 是在路徑控制點和 Bezier 點部分中描述的插值因子。默認值為 0.5 \n VirtualDistance ：虛擬距離值，添加到該控制點位置的路徑長度上，另請參見路徑位置或路徑長度計算方法。默認值為 0.0 \n 輔助標誌：可以用於各種目的的標誌，可以通過 sim.getDataOnPath 函數進行查詢。默認值為 0 。 \n 輔助通道 1-4 ：可以用於各種目的的值，可以通過 sim.getDataOnPath 函數進行查詢。默認值為 0.0 \n 除了前三個值（控制點位置坐標）外，所有其他值都可以省略，在這種情況下，將應用默認值。 \n \xa0 導出路徑 \n 通過選擇路徑，然後單擊 [ 菜單欄 -> 文件 -> 導出 -> 選定路徑為 CSV ...] ，可以導出路徑的控制點。在這種情況下，導出格式與前面描述的路徑導入格式相同。 \n 也可以通過選擇路徑，然後單擊 [ 菜單欄 -> 文件 -> 導出 -> 所選路徑的 Bezier 曲線為 CSV ...] 來導出路徑的 Bezier 點。在這種情況下，創建的文件（導出的文件）中的每一行都對應一個 Bezier 點，並包含以下值： \n \xa0 x ， y ， z ， alpha ， beta ， gamma ，相對速度，虛擬距離，輔助標記，輔助通道 1 ，輔助通道 2 ， assistantChannel3 ， auxiliaryChannel4 \xa0 \n \xa0 \n 路徑編輯模式 (Path edit mode) \n 初步說明：路徑編輯模式是一種方便且功能齊全的編輯路徑對象的方法。但是，可以在不進入用於最小化路徑修改的路徑編輯模式的情況下移動和擦除單個路徑點（選擇單個路徑點時，請確保沒有選擇除路徑之外的其他對象）。 \n 可以通過單擊相應的工具欄按鈕來訪問路徑編輯模式： \n \n [ 路徑編輯模式工具欄按鈕 ] \xa0 \n 上面的工具欄按鈕僅在選擇路徑後才有效。在路徑編輯模式下，窗口中通常顯示場景層次結構的部分用於將路徑控制點顯示為列表。可以使用鼠標選擇列表中的項目，就像在層次結構窗口中的對像一樣。 \n \xa0 \n [ 路徑編輯模式 ] \n 現在可以像常規對像一樣選擇單個控制點。最後選擇的控制點以白色顯示，其他選擇的控制點以黃色顯示，未選擇的控制點以藍色顯示。以類似的方式，可以使用鼠標直接平移控制點，方法是使用工具欄的對象 / 項目平移工具欄按鈕在與視圖方向垂直的平面中平移所選的控制點： \n \n [ 對象 / 項目翻譯工具欄按鈕 ] \n 在路徑編輯模式下，將顯示路徑編輯模式對話框： \n \n [ 控制點屬性對話框 ] \n 路徑已關閉：如果選中，則路徑的最後一個控制點將鏈接到其第一個控制點，以關閉路徑並使其循環運行。閉合路徑至少需要 3 個控制點。 \n 路徑是平坦的：如果選中，則所有控制點（以及隨後的所有 Bezier 點）都將約束到路徑對象的本地參考系的 z = 0 平面。 \n 自動定向：如果啟用，則將自動計算所有控制點和貝塞爾曲線點的定向，以使該點的 z 軸沿著路徑，其 y 軸指向其曲率向外（如果啟用了 x up ，則 y - 軸沒有特別限制）。如果禁用，則用戶確定控制點的方向，貝塞爾曲線點的方向將從路徑的控制點的方向內插。 \n 保持 x 向上：如果選中，則自動定向功能將使每個 Bezier 點的 z 軸沿路徑對齊，並使其 x 軸沿路徑對象的 z 軸指向。 \n 清除選擇：清除控制點的選擇。 \n 反轉選擇：反轉控制點的選擇狀態。 \n 製作虛擬對象：在選擇控制點的位置生成虛擬對象。 \n 貝塞爾曲線插值因子 1/2 ：有關詳細信息，請參見控制點和貝塞爾曲線部分。 \n 貝塞爾曲線點數：有關詳細信息，請參見控制點和貝塞爾曲線部分。 \n 虛擬距離：有關詳細信息，請參見關於沿路徑運動的部分。 \n 輔助標誌：可以用於各種目的的標誌，可以通過 sim.getDataOnPath 函數進行查詢。 \n 輔助通道 1-4 ：可以用於各種目的的值，可以通過 sim.getDataOnPath 函數進行查詢。 \n 為了精確定位控制點，請使用坐標和變換對話框。如果要編輯控制點的方向，請確保禁用路徑的“自動方向”選項（默認情況下啟用該選項）。 \n 常規鍵組合（即 ctrl-c ， ctrl-v ， delete 和 ctrl-x ）支持複製 / 粘貼 / 刪除 / 剪切操作。確保主視圖具有焦點，以便按鍵起作用。如果未選擇任何控制點，則黏貼操作會將復制的控制點黏貼到控制點列表的開頭，否則將黏貼到選定的控制點之後（確保不超過一個控制點）。在此階段選擇）。也可以通過彈出菜單或通過 [ 主菜單 -> 編輯 ] 訪問相同的複制 / 黏貼 / 刪除 / 剪切功能。其他操作包括： \n 在路徑的開頭插入新的路徑點 / 選擇後插入新的路徑點：如果未選擇任何控制點，則在路徑的開頭插入新的控制點；否則，在當前選擇之後插入新的控制點（請確保沒有其他內容）在這種情況下，選擇一個控制點）。 \n 從貝塞爾曲線創建新路徑：使用當前路徑的貝塞爾點生成一個新的路徑對象，即新路徑的控制點將為當前路徑的貝塞爾點。 \n \xa0 \n 超頻樹 (OC trees) \n OC 樹是代表空間分區的對象。它由樹形數據結構組成，其中每個節點正好具有八個子代。佔用的葉節點表示為體素。 \xa0 OC 樹可用於為形狀或點雲提供簡化的表示，或者可充當佔用網格 / 空間： \n \n OC 樹是可碰撞，可測量和可檢測的對象。這意味著 OC 樹： \n 可用於與其他可碰撞對象的碰撞檢測。 \n 可與其他可測量對像一起用於最小距離計算。 \n 可以被接近傳感器檢測到。 \n OC 樹可以使用 [ 菜單欄 -> 添加 -> OC 樹 ] 添加到場景中，並通過 OC 樹屬性進行編輯。 \n CoppeliaSim 中可用的 OC 樹計算（即碰撞，距離和接近傳感器計算）也可以通過 Coppelia 幾何例程作為獨立例程使用。 \n \xa0 \n OC 樹屬性 (OC tree properties) \n OC 樹屬性是場景對象屬性對話框的一部分，該對話框位於 [ 菜單欄 -> 工具 -> 場景對象屬性 ] 。您還可以通過雙擊場景層次結構中的對像圖標或單擊其工具欄按鈕來打開對話框： \n \xa0 \n [ 場景對象屬性工具欄按鈕 ] \n 在場景對象屬性對話框中，單擊 OC 樹按鈕以顯示 OC 樹對話框（僅當最後選擇的是 OC 樹時才會顯示 OC 樹按鈕）。該對話框顯示最後選擇的 OC 樹的設置和參數： \n \xa0 \n [OC 樹對話框 ] \n 體素大小： OC 樹體素的大小。大小越小，用於 OC 樹數據結構的內存就越大。 \n 插入選定的可見對象：允許基於選定的可見對象插入體素。僅考慮虛擬對象，形狀，超頻樹和點雲。選擇要插入的所有對象，然後最後選擇目標 OC 樹對象。 \n 減去選定的可見對象：允許基於選定的可見對象刪除體素。僅考慮虛擬對象，形狀，超頻樹和點雲。選擇要插入的所有對象，然後最後選擇目標 OC 樹對象。 \n 清除 OC 樹：從 OC 樹中刪除所有體素。 \n 體素具有隨機顏色：每個體素將具有隨機顏色。 \n 顯示 OC 樹結構：顯示 OC 樹數據結構，主要用於調試目的。 \n 顏色是自發光的：體素將以自發光的顏色顯示。 \n 顯示點而不是體素：對於包含大量體素的 OC 樹，顯示可能會很慢。在這種情況下，您可以顯示像素體素，而不是立方體素。 \n 調整下一次插入的顏色：允許選擇新的顏色，該顏色將用於新的體素插入。 \n \n 點雲 (Point clouds) \n 點雲是充當基於 OC 樹的點容器的對象： \n \xa0 \n 點雲是可碰撞，可測量和可檢測的對象。這意味著點雲： \n 可用於與其他基於體積的可碰撞對象（例如 OC 樹）的碰撞檢測。 \n 可與其他可測量對像一起用於最小距離計算。 \n 可以被接近傳感器檢測到。 \n 可以使用 [ 菜單欄 -> 添加 -> 點雲 ] 將點雲添加到場景，並通過點雲屬性進行編輯。 \n CoppeliaSim 中可用的點雲計算（即碰撞，距離和接近傳感器計算）也可以通過 Coppelia 幾何例程作為獨立例程使用。 \n \xa0 \n 點雲屬性 (Point cloud properties) \n 點雲屬性是場景對象屬性對話框的一部分，該對話框位於 [ 菜單欄 -> 工具 -> 場景對象屬性 ] 。您還可以通過雙擊場景層次結構中的對像圖標或單擊其工具欄按鈕來打開對話框： \n \xa0 \n [ 場景對象屬性工具欄按鈕 ] \n 在場景對象屬性對話框中，單擊“點雲”按鈕以顯示 OC 樹對話框（“點雲”按鈕僅在最後選擇的是點雲時出現）。該對話框顯示最後選擇的點雲的設置和參數： \n \xa0 \n [ 點雲對話框 ] \n 不要使用 OC 樹計算。結構：默認情況下，點雲使用類似於 OC 樹的計算結構進行有效的點操作。此結構可能會減慢插入點和刪除點的速度。如果啟用此項目，則點插入將更加有效，但是點雲將不再可碰撞，不可測量或不可檢測，並且某些其他操作也可能會受到限制。您始終可以在以後的階段或通過 sim.setPointCloudOptions 切換此項目。 \n 最高體素大小：將包含點的 OC 樹體素的最大大小。大小越小，此點雲所基於的 OC 樹數據結構將使用的內存就越大。 \n 最高點數 / 體素：單個 OC 樹體素可以包含的最大點數。如果需要在此類體素中存儲更多點，它將被拆分為 8 個子體素，直到滿足約束條件為止。為了有效地進行碰撞檢測，距離計算和接近傳感器檢測，建議在單個體素中存儲大約 10-20 個點。 \n 插入選定的可見對象：允許基於選定的可見對象插入點。僅考慮虛擬對象，形狀，超頻樹和點雲。選擇要插入的所有對象，然後最後選擇目標點雲對象。形狀將事先轉換為具有指定構建分辨率的臨時 OC 樹。插入公差項允許通過指定用於確定是否插入點的最小距離公差來避免重複的點。插入公差 > 0.0 時，點插入將變慢。 \n 減去選定的可見對象：允許基於選定的可見對象減去點。僅考慮虛擬變量，超頻樹和點雲。選擇要減去的所有對象，然後最後選擇目標點雲對象。假人和點雲將使用減法公差值來標識要刪除的點。 \n 清除點雲：從點雲中刪除所有點。 \n 點具有隨機顏色：每個點將具有隨機顏色。 \n 顯示 OC 樹結構：顯示底層 OC 樹數據結構，主要用於調試目的。 \n 顏色是自發光的：點將以自發光的顏色顯示。 \n 點顯示比例：包含大量點的點雲可能會減慢渲染速度。通過將比率設置為小於 1 ，將為每個包含點的 OC 樹體素顯示更少的點數。這僅對顯示 / 渲染的圖像有影響。 \n 點大小：點的大小，以像素為單位。 \n 調整下一次插入的顏色：允許選擇一種新的顏色，該顏色將用於新的點插入。 \n \xa0 \n 外部控制器教程 (External controller tutorial) \n 在 CoppeliaSim 中，有幾種方法可以控制機器人或仿真： \n 最方便的方法是編寫一個子腳本來處理給定機器人或模型的行為。這是最方便的方法，因為子腳本直接附加到場景對象，它們將與相關的場景對像一起復制，它們不需要使用外部工具進行任何編譯，它們可以在線程或非線程模式下運行，它們可以通過自定義 Lua 函數或 Lua 擴展庫進行擴展。使用子腳本的另一個主要優點是：與本節中提到的後 3 種方法（即使用常規 API ）一樣，沒有通信延遲，並且子腳本是應用程序主線程的一部分（固有的同步操作）。但是，編寫腳本有幾個缺點：您無法選擇編程語言，不能擁有最快的代碼，並且除了 Lua 擴展庫之外，無法直接訪問外部函數庫。 \n 可以控制機器人或模擬的另一種方法是編寫插件。插件機制允許使用回調機制，自定義 Lua 函數註冊，當然還可以訪問外部函數庫。插件通常與子腳本結合使用（例如，插件註冊自定義的 Lua 函數，當從子腳本中調用時，該 Lua 函數將回調特定的插件函數）。使用插件的主要優勢還在於，與本節中提到的後 3 種方法（即使用常規 API ）一樣，沒有通信延遲，並且插件是應用程序主線程的一部分（固有的同步操作）。插件的缺點是：它們的編程更加複雜，並且也需要使用外部編譯。另請參閱插件教程。 \n 控制機器人或模擬的第三種方法是編寫依賴於遠程 API 的外部客戶端應用程序。如果您需要從外部應用程序，機器人或另一台計算機運行控制代碼，這是一種非常便捷的方法。這也使您可以使用與運行真實機器人完全相同的代碼來控制仿真或模型（例如虛擬機器人）。遠程 API 有兩個版本：基於 B0 的遠程 API 和舊版遠程 API 。 \n 控制機器人或仿真的第五種方法是通過 ROS 節點。 \xa0 ROS 與遠程 API 相似，是使多個分佈式進程相互通信的便捷方法。儘管遠程 API 非常輕巧且快速，但它僅允許與 CoppeliaSim 通信。另一方面， ROS 允許幾乎將任意數量的進程相互連接，並且提供了大量兼容的庫。但是，它比遠程 API 重並且更複雜。有關詳細信息，請參閱 ROS 接口。 \n 控制機器人或模擬的第六種方法是通過 BlueZero （ BØ ）節點。與 ROS 類似， BlueZero 是使多個分佈式進程相互通信的一種便捷方法，並且是一種輕量級的跨平台解決方案。有關詳細信息，請參考 BlueZero 界面。 \n 控制機器人或模擬的第七種方法是編寫一個外部應用程序，該應用程序通過各種方式（例如管道，套接字，串行端口等）與 CoppeliaSim 插件或 CoppeliaSim 腳本進行通信。選擇編程語言（可以是任何一種語言）和靈活性是兩個主要優點。同樣，控制代碼也可以在機器人或其他計算機上運行。但是，與使用遠程 API 的方法相比，這種控制仿真或模型的方法更加乏味。 \n 有 8 個與本教程相關的場景文件： \n scenes / controlTypeExamples / 受控 ViaScript ：一個機器人是通過非線程子腳本控制的，另一個是通過線程子腳本控制的。 \n scenes / controlTypeExamples / 受控 ViaPlugin ：機器人是通過插件控制的。 \n scenes / controlTypeExamples / controlViaB0RemoteApi ：通過基於 B0 的遠程 API 來控制機器人。 \n scenes / controlTypeExamples / 受控 ViaLegacyRemoteApi ：通過舊版遠程 API 控制機器人。 \n scenes / controlTypeExamples / controlViaB0 ：通過 BlueZero 界面控制機器人。 \n scenes / controlTypeExamples / 受控 ViaRos ：通過 ROS 接口控制機器人。 \n scenes / controlTypeExamples / controlViaRos2 ：通過 ROS2 接口控制機器人。 \n scenes / controlTypeExamples / 受控 ViaTcp ：通過 LuaSocket 和 TCP 控制機器人。 \n \n 在所有 8 種情況下，都使用子腳本，主要是為了與外界建立鏈接（例如，啟動正確的客戶端應用程序，並將正確的對象句柄傳遞給它）。有兩種其他方法可以控制機器人，模擬或模擬器本身：使用自定義腳本或附加組件。但是，不建議將它們用於控制，而應使用在模擬未運行時處理功能。 \n 例如，鏈接到場景控制的 ViaB0RemoteApi.ttt 中的機器人的子腳本具有以下主要任務： \n 使用某些對象句柄作為參數啟動控制器應用程序（ bubbleRobClient_b0RemoteApi ）。基於對象 B0 的遠程 API 的服務器功能由對象 b0RemoteApiServer 提供。 \n 作為另一個示例，鏈接到場景控制的 ViaRos.ttt 中的機器人的子腳本具有以下主要任務： \n 檢查是否已加載 CoppeliaSim 的 ROS 接口 \n 使用某些主題名稱或對象句柄作為參數啟動控制器應用程序（ rosBubbleRob ） \n 然而，作為另一個示例，鏈接到場景控制的 ViaTcp.ttt 中的機器人的子腳本具有以下主要任務： \n 搜索空閒的套接字連接端口 \n 使用所選的連接端口作為參數啟動控制器應用程序（ bubbleRobServer ） \n 本地連接到控制器應用程序 \n 在每次仿真過程中，將傳感器值發送到控制器，並從控制器讀取所需的電機值 \n 在每次模擬過程中，將所需的電機值應用於機器人的關節 \n 運行模擬，然後復制並粘貼機器人：您將看到重複的機器人將直接運行，因為附加的子腳本負責啟動各自外部應用程序的新實例，或調用適當的插件函數。 \n', 'tags': '', 'url': '瞭解四輪機器人.html'}, {'title': 'Work4', 'text': '', 'tags': '', 'url': 'Work4.html'}, {'title': 'VirtualBox', 'text': '設定IPV6及IPV4 \n 設定IPV4 \n \n 設定IPV6 \n \n 在virtualbox-Ubunto中進入cd2020pj1( cd /tmp/cd2020pj1) \n 輸入 python3 wsgi.py(Gpython3 wsgi.py(ifconfig ifconfig 中近端需與wsgi.pyfig 中近端需與wsgi.py中相同) \n \n 獲得網址 \n \n 在firefox中輸入網址獲得以下畫面表示連線成功 \n \n', 'tags': '', 'url': 'VirtualBox.html'}, {'title': 'Work5', 'text': '配置IPv6在指定網路位置外部連線 \n \n 每個人依照學號分配到一個IPv6的網路位置 \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n \n \n \n 2001:288:6004:17:2020:1::7101/64 \n \xa0 \n 2001:288:6006:17 為機械設計系網段 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 2020 為年份 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 1 為 cda, 2 為 cdb, 3 為 wcm, 4 為 wcmj \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 71 為 407231 表示甲班, 72 為乙班 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 01 則為該班學號 \n \n \n \n \n \n \n \n 所以我的網路位置是2001:288:6004:17:2020:1::7151 \n 防火牆和proxy一定要關掉 \n 如果還是不行正常執行 \n 可以依照下列順序排除問題 \n \n 檢查虛擬主機網路是否正常運作 \n 在虛擬主機上是否可以成功連上wsgi.py \n 外部是否可以成功連上 \n \n 若在第一項遇到問題就要檢查網路設定是否正確 \n 第二項確認ifconfig所查到的IP是否為fd開頭，wsgi.py的ID是否為查到的IP，網址是[IPv6的ID]:啟動的Port號 \n 第三項要確認網卡的IPv6設定是否正確，防火牆和proxy是否關閉，網址的Port號是否與設定的相同，若分配到的網路位置連不到可先換成::1看是否連的上 \n', 'tags': '', 'url': 'Work5.html'}, {'title': 'Work6', 'text': '成功讓外部主機連上 \n 由於是在學校的共用電腦所以先確認虛擬主機的網路設定，確認ifconfig查到的ID和設定的相同，IPv6的host ID是否是自己被分配到的ID \n 確認無誤後，再執行wsgi.py，在虛擬主機測試，但在開啟時缺少pydrive，所以補裝上 \n \n \n \n \n \n \n 1 \n \n \n \n pip3 install pydrive \n \n \n \n \n \n \n \n 開啟網頁時還是出現錯誤，就更新mako，先到mako模組的目錄下移除mako，再安裝mako 1.1.3 版本 \n \n \n \n \n \n \n 1 \n 2 \n 3 \n \n \n \n cd /usr/lib/python3/dist-packages \n sudo re -r mako \n sudo pip3 install mako==1.1.3 \n \n \n \n \n \n \n \n 之後wsgi.py開啟後就正常了 \n 接下來就測試外面的主機是否可以正常連上 \n 先到網路卡設定 \n 設定好把proxy和防火牆關閉 \n 再用瀏覽器連到https://[2001:288:6004:17:2020:1:0:7151]:17443 \n 成功連線 \n', 'tags': '', 'url': 'Work6.html'}, {'title': 'Work7', 'text': '這是我們組ag1所共同組起的車子並已在 coppeliasimcoppeliasim完成作動 \n \n', 'tags': '', 'url': 'Work7.html'}, {'title': '問題解決', 'text': '在過程中所遇到的問題及解決辦法 \n', 'tags': '', 'url': '問題解決.html'}, {'title': 'push衝突', 'text': "在push的時候總會遇到相互衝突的時候而產生類似下面的文字提示 \n error: failed to push some refs to 'https://github.com/mdecourse/cdaw13-1' hint: Updates were rejected because the remote contains work that you do hint: not have locally. This is usually caused by another repository pushing hint: to the same ref. You may want to first integrate the remote changes hint: (e.g., 'git pull ...') before pushing again. hint: See the 'Note about fast-forwards' in 'git push --help' for details. \n 解決辦法:發生原因是來自於他人上傳而產生新檔案自己沒有這個新檔案 \n 所以只要git pull再git push即可", 'tags': '', 'url': 'push衝突.html'}]};