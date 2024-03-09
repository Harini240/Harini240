import java.util.Scanner;

public class PersonalDiary {
    private static final String PASSWORD = "121340";
    private static final String FILENAME = "diary.txt";

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter password:");
        String password = scanner.nextLine();
        if (!password.equals(PASSWORD)) {
            System.out.println("Incorrect password. Exiting...");
            return;
        }
        System.out.println("Welcome to your personal diary!");
        while (true) {
            System.out.println("Enter 1 to add a new memories.");
            System.out.println("Enter 2 to view all memories.");
            System.out.println("Enter 3 to lock the memories.");
            int choice = scanner.nextInt();
            scanner.nextLine();
            switch (choice) {
                case 1:
                    addEntry(scanner);
                    break;
                case 2:
                    viewEntries();
                    break;
                case 3:
                    System.out.println("Exiting...");
                    return;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }

    private static void addEntry(Scanner scanner) {
        System.out.println("Enter your memory:");
        String entry = scanner.nextLine();
        FileUtils.appendToFile(FILENAME, entry + "\n");
        System.out.println("memory added successfully!");
    }

    private static void viewEntries() {
        String entries = FileUtils.readFromFile(FILENAME);
        System.out.println("my memories entries:");
        System.out.println(entries);
    }
}

class FileUtils {
    static void appendToFile(String filename, String text) {
        // TODO: Implement this method.
    }

    static String readFromFile(String filename) {
        // TODO: Implement this method.
        return "";
    }
}