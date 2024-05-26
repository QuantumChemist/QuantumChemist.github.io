---
layout: misc
---

## Tools

<a href="https://github.com/QuantumChemist/LobsterPyGUI" target="_blank"><button>LobsterPyGUI</button></a>

*This is what [ChatGPT 4o](https://chatgpt.com/?oai-dm=1&model=gpt-4o) says:*

LobsterPyGUI is a graphical user interface designed to facilitate the use of LobsterPy, a Python package developed to handle and plot outputs from the LOBSTER software. Here are the key details:

### Overview
LobsterPyGUI is aimed at users who are not familiar with command-line interfaces and provides an accessible way to manage LOBSTER input and output. The GUI helps users get started with [LobsterPy](https://github.com/JaGeo/LobsterPy) by offering a simplified interface that runs on Linux/GNU systems [[❞]](https://github.com/QuantumChemist/LobsterPyGUI) [[❞]](https://github.com/QuantumChemist/LobsterPyGUI/releases).

### Features
- **Graphical Interface**: The GUI provides basic functionalities such as plotting density of states (DOS) and other outputs from LOBSTER without needing to use command-line instructions.
- **User-Friendly**: Designed to help beginners get accustomed to Linux and CLI, the interface ensures that standard outputs and errors from commands are displayed within the GUI.
- **Installation**: Users can download the `lobsterpygui` binary and copy it to their `$HOME/bin` folder. The GUI is then run from the terminal within the directory of the LOBSTER calculations [[❞]](https://github.com/QuantumChemist/LobsterPyGUI) [[❞]](https://github.com/QuantumChemist/LobsterPyGUI/releases) [[❞]](https://quantumchemist.github.io/).

### Installation and Usage
1. **Download the Binary**:
   Download the `lobsterpygui` binary from the [GitHub repository](https://github.com/QuantumChemist/LobsterPyGUI/releases).
2. **Copy to Bin Folder**:
   Copy the binary to your `$HOME/bin` directory and ensure this directory is included in your `$PATH` environment variable.
   ```sh
   cp $HOME/Downloads/lobsterpygui $HOME/bin
   ```
3. **Run the GUI**:
   Navigate to the folder containing your LOBSTER calculations and execute the GUI from the terminal.
   ```sh
   cd /path/to/your/lobster/calc
   lobsterpygui
   ```
4. **Functionality**:
   When the GUI is opened, you can click on options like `Plot LOBSTER DOS`, which will internally execute commands such as `lobsterpy plot-dos`, displaying the results within the GUI [[❞]](https://github.com/QuantumChemist/LobsterPyGUI) [[❞]](https://github.com/QuantumChemist/LobsterPyGUI/releases).

### Developer and Background
The GUI is developed by Christina Ertural, a researcher in theoretical and solid-state chemistry. She has contributed significantly to the development of scientific software, including LOBSTER and LobsterPy, which are tools used in quantum and computational chemistry [[❞]](https://quantumchemist.github.io/).

### Further Information
For more details and to download the latest version, visit the [LobsterPyGUI GitHub repository](https://github.com/QuantumChemist/LobsterPyGUI). The repository includes the source code, installation instructions, and a comprehensive README file that explains how to use the software.

By providing this user-friendly interface, LobsterPyGUI aims to make it easier for researchers and students to engage with powerful computational chemistry tools without needing extensive command-line experience.

<a href="https://quantumchemist.github.io/table" target="_blank"><button>Table</button></a>


<a href="./" target="_blank"><button>back</button></a>
