import { SubmitKey } from "../store/config";
import { LocaleType } from "./index";

const gr: LocaleType = {
  WIP: "Έρχεται σύντομα...",
  Error: {
    Unauthorized:
      "Υποστηρίξτε το Ultimate ChatGPT στο [Patreon](https://patreon.com/KiasK?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link) ή μέσω Bkash (+880 1812-715289), Στείλτε χρήση [Worldremit](https://www.worldremit.com/en?amountfrom=10.00&selectfrom=us&currencyfrom=usd&selectto=bd&currencyto=bdt&transfer=mob), Αριθμός κινητού πορτοφολιού: +880 1812-715289 για να μας βοηθήσετε να βελτιώσουμε και να διατηρήσουμε αυτό το ισχυρό Ultimate ChatGPT.",
  },
  Auth: {
    Title: "Χρειάζεστε κωδικό πρόσβασης",
    Tips: "Παρακαλώ εισάγετε τον κωδικό πρόσβασης παρακάτω",
    Input: "κωδικός πρόσβασης",
    Confirm: "Επιβεβαίωση",
    Later: "Αργότερα",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} μηνύματα`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} μηνύματα`,
    Actions: {
      ChatList: "Μετάβαση στη λίστα συνομιλιών",
      CompressedHistory: "Συμπιεσμένη Ιστορία Μνήμης Prompt",
      Export: "Εξαγωγή Όλων των Μηνυμάτων ως Markdown",
      Copy: "Αντιγραφή",
      Stop: "Διακοπή",
      Retry: "Επανάληψη",
      Pin: "Καρφίτσωμα",
      PinToastContent: "Καρφιτσώθηκαν 2 μηνύματα στα προτροπήματα περιεχομένου",
      PinToastAction: "Προβολή",
      Delete: "Διαγραφή",
      Edit: "Επεξεργασία",
    },
    Commands: {
      new: "Ξεκινήστε μια νέα συνομιλία",
      newm: "Ξεκινήστε μια νέα συνομιλία με μάσκα",
      next: "Επόμενη Συνομιλία",
      prev: "Προηγούμενη Συνομιλία",
      clear: "Καθαρισμός Συμφραζόμενου",
      del: "Διαγραφή Συνομιλίας",
    },
    InputActions: {
      Stop: "Διακοπή",
      ToBottom: "Στο Τελευταίο",
      Theme: {
        auto: "Αυτόματο",
        light: "Φωτεινό Θέμα",
        dark: "Σκοτεινό Θέμα",
      },
      Prompt: "Προτροπές",
      Masks: "Μάσκες",
      Clear: "Καθαρισμός Συμφραζόμενου",
      Settings: "Ρυθμίσεις",
    },
    Rename: "Μετονομασία Συνομιλίας",
    Typing: "Πληκτρολογώντας...",
    Input: (submitKey: string) => {
      var inputHints = `Πατήστε ${submitKey} για αποστολή`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter για αναδίπλωση";
      }
      return inputHints + ", / για αναζήτηση προτροπών, : για χρήση εντολών";
    },
    Send: "Αποστολή",
    Config: {
      Reset: "Επαναφορά στις προεπιλογές",
      SaveAs: "Αποθήκευση ως Μάσκα",
    },
  },
  Export: {
    Title: "Εξαγωγή Μηνυμάτων",
    Copy: "Αντιγραφή Όλων",
    Download: "Λήψη",
    MessageFromYou: "Μήνυμα Από Εσάς",
    MessageFromChatGPT: "Μήνυμα Από το ChatGPT",
    Share: "Κοινοποίηση στο KiAsk Share",
    Format: {
      Title: "Μορφή Εξαγωγής",
      SubTitle: "Markdown ή Εικόνα PNG",
    },
    IncludeContext: {
      Title: "Συμπερίληψη Συμφραζόμενου",
      SubTitle: "Εξαγωγή προτροπών συμφραζόμενου σε μάσκα ή όχι",
    },
    Steps: {
      Select: "Επιλογή",
      Preview: "Προεπισκόπηση",
    },
    Image: {
      Toast: "Γίνεται καταγραφή εικόνας...",
      Modal: "Πατήστε παρατεταμένα ή δεξί κλικ για να αποθηκεύσετε την εικόνα",
    },
  },
  Select: {
    Search: "Αναζήτηση",
    All: "Επιλογή Όλων",
    Latest: "Επιλογή Τελευταίου",
    Clear: "Καθαρισμός",
  },
  Memory: {
    Title: "Προτροπή Μνήμης",
    EmptyContent: "Τίποτα ακόμα.",
    Send: "Αποστολή Μνήμης",
    Copy: "Αντιγραφή Μνήμης",
    Reset: "Επαναφορά Συνεδρίας",
    ResetConfirm:
      "Η επαναφορά θα διαγράψει το ιστορικό συνομιλιών και την ιστορική μνήμη. Είστε βέβαιοι ότι θέλετε να επαναφέρετε;",
  },
  Home: {
    NewChat: "Νέα Συνομιλία",
    DeleteChat: "Επιβεβαίωση διαγραφής της επιλεγμένης συνομιλίας;",
    DeleteToast: "Η Συνομιλία Διαγράφηκε",
    Revert: "Επαναφορά",
  },
  Settings: {
    Title: "Ρυθμίσεις",
    SubTitle: "Όλες οι Ρυθμίσεις",
    Danger: {
      Reset: {
        Title: "Επαναφορά Όλων των Ρυθμίσεων",
        SubTitle: "Επαναφορά όλων των ρυθμίσεων στις προεπιλεγμένες",
        Action: "Επαναφορά",
        Confirm: "Επιβεβαίωση επαναφοράς όλων των ρυθμίσεων στις προεπιλεγμένες;",
      },
      Clear: {
        Title: "Εκκαθάριση Όλων των Δεδομένων",
        SubTitle: "Εκκαθάριση όλων των μηνυμάτων και ρυθμίσεων",
        Action: "Εκκαθάριση",
        Confirm: "Επιβεβαίωση εκκαθάρισης όλων των μηνυμάτων και ρυθμίσεων;",
      },
    },
    Lang: {
      Name: "Γλώσσα", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Όλες οι Γλώσσες",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Μέγεθος Γραμματοσειράς",
      SubTitle: "Ρύθμιση μεγέθους γραμματοσειράς του περιεχομένου της συνομιλίας",
    },

    InputTemplate: {
      Title: "Πρότυπο Εισόδου",
      SubTitle: "Το πιο πρόσφατο μήνυμα θα συμπληρωθεί σε αυτό το πρότυπο",
    },

    Update: {
      Version: (x: string) => `Έκδοση: ${x}`,
      IsLatest: "Τελευταία έκδοση",
      CheckUpdate: "Έλεγχος Ενημέρωσης",
      IsChecking: "Γίνεται έλεγχος ενημέρωσης...",
      FoundUpdate: (x: string) => `Βρέθηκε νέα έκδοση: ${x}`,
      GoToUpdate: "Ενημέρωση",
    },
    SendKey: "Κλειδί Αποστολής",
    Theme: "Θέμα",
    TightBorder: "Σφιχτό Περίγραμμα",
    SendPreviewBubble: {
      Title: "Αποστολή Προεπισκόπησης Φυσαλίδας",
      SubTitle: "Προεπισκόπηση markdown σε φυσαλίδα",
    },
    Mask: {
      Splash: {
        Title: "Οθόνη Καλωσορίσματος Μάσκας",
        SubTitle: "Εμφάνιση οθόνης καλωσορίσματος μάσκας πριν από την έναρξη νέας συνομιλίας",
      },
      Builtin: {
        Title: "Απόκρυψη Ενσωματωμένων Μασκών",
        SubTitle: "Απόκρυψη ενσωματωμένων μασκών στη λίστα μασκών",
      },
    },
    Prompt: {
      Disable: {
        Title: "Απενεργοποίηση αυτόματης συμπλήρωσης",
        SubTitle: "Εισάγετε / για να ενεργοποιήσετε την αυτόματη συμπλήρωση",
      },
      List: "Λίστα Προτροπών",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} ενσωματωμένες, ${custom} καθορισμένες από τον χρήστη`,
      Edit: "Επεξεργασία",
      Modal: {
        Title: "Λίστα Προτροπών",
        Add: "Προσθήκη Μίας",
        Search: "Αναζήτηση Προτροπών",
      },
      EditModal: {
        Title: "Επεξεργασία Προτροπής",
      },
    },
    HistoryCount: {
      Title: "Πλήθος Συνδεδεμένων Μηνυμάτων",
      SubTitle: "Αριθμός αποστελλόμενων συνδεδεμένων μηνυμάτων ανά αίτηση",
    },
    CompressThreshold: {
      Title: "Όριο Συμπίεσης Ιστορικού",
      SubTitle:
        "Θα συμπιέσει εάν το μήκος των μη συμπιεσμένων μηνυμάτων υπερβαίνει την τιμή",
    },
    Token: {
      Title: "Κλειδί API",
      SubTitle: "Χρησιμοποιήστε το κλειδί σας για να αγνοήσετε το όριο κωδικού πρόσβασης",
      Placeholder: "Κλειδί OpenAI API",
    },
    Usage: {
      Title: "Υπόλοιπο Λογαριασμού",
      SubTitle(used: any, total: any) {
        return `Χρησιμοποιήθηκε αυτόν τον μήνα $${used}, συνδρομή $${total}`;
      },
      IsChecking: "Γίνεται έλεγχος...",
      Check: "Έλεγχος",
      NoAccess: "Εισαγάγετε το κλειδί API για να ελέγξετε το υπόλοιπο",
    },
    AccessCode: {
      Title: "Κωδικός Πρόσβασης",
      SubTitle: "Ενεργοποιήθηκε ο έλεγχος πρόσβασης",
      Placeholder: "Απαιτείται Κωδικός Πρόσβασης",
    },
    Endpoint: {
      Title: "Τελικός Σταθμός",
      SubTitle: "Ο προσαρμοσμένος τελικός σταθμός πρέπει να ξεκινά με http(s)://",
    },
    Model: "Μοντέλο",
    Temperature: {
      Title: "Θερμοκρασία",
      SubTitle: "Ένα μεγαλύτερο ποσοστό δίνει πιο τυχαία αποτελέσματα",
    },
    TopP: {
      Title: "Top P",
      SubTitle: "Μην αλλάξετε αυτήν την τιμή μαζί με τη θερμοκρασία",
    },
    MaxTokens: {
      Title: "Μέγιστος Αριθμός Διακριτικών",
      SubTitle: "Μέγιστο μήκος διακριτικών εισόδου και δημιουργημένων διακριτικών",
    },
    PresencePenalty: {
      Title: "Ποινή Παρουσίας",
      SubTitle:
        "Ένα μεγαλύτερο ποσοστό αυξάνει την πιθανότητα να μιλήσει για νέα θέματα",
    },
    FrequencyPenalty: {
      Title: "Ποινή Συχνότητας",
      SubTitle:
        "Ένα μεγαλύτερο ποσοστό μειώνει την πιθανότητα επανάληψης της ίδιας γραμμής",
    },
  },
  Store: {
    DefaultTopic: "Νέα Συνομιλία",
    BotHello: "Γειά σας! Πώς μπορώ να σας βοηθήσω σήμερα;",
    Error: "Κάτι πήγε στραβά, παρακαλώ δοκιμάστε ξανά αργότερα.",
    Prompt: {
      History: (content: string) =>
        "Αυτή είναι μια περίληψη της ιστορίας της συνομιλίας ως ανακεφαλαίωση: " + content,
      Topic:
        "Παρακαλώ δημιουργήστε έναν τίτλο τεσσάρων έως πέντε λέξεων που περιλαμβάνει τη συνομιλία μας χωρίς οποιοδήποτε κείμενο εισαγωγής, σημεία στίξης, εισαγωγικά, τελείες, σύμβολα ή επιπλέον κείμενο. Αφαιρέστε τα εισαγκωμένα εισαγωγικά.",
      Summarize:
        "Συνοψίστε συνοπτικά τη συζήτηση σε 200 λέξεις ή λιγότερο για να χρησιμοποιηθεί ως προτροπή για μελλοντικό περιεχόμενο.",
    },
  },
  Copy: {
    Success: "Αντιγράφηκε στο πρόχειρο",
    Failed: "Η αντιγραφή απέτυχε, παρακαλώ επιτρέψτε την πρόσβαση στο πρόχειρο",
  },
  Context: {
    Toast: (x: any) => `Με ${x} προτροπές περιεχομένου`,
    Edit: "Ρυθμίσεις Τρέχουσας Συνομιλίας",
    Add: "Προσθήκη Προτροπής",
    Clear: "Καθαρισμός Συμφραζόμενου",
    Revert: "Επαναφορά",
  },
  Plugin: {
    Name: "Πρόσθετο",
  },
  Mask: {
    Name: "Μάσκα",
    Page: {
      Title: "Πρότυπο Προτροπής",
      SubTitle: (count: number) => `${count} πρότυπα προτροπών`,
      Search: "Αναζήτηση Προτύπων",
      Create: "Δημιουργία",
    },
    Item: {
      Info: (count: number) => `${count} προτροπές`,
      Chat: "Συνομιλία",
      View: "Προβολή",
      Edit: "Επεξεργασία",
      Delete: "Διαγραφή",
      DeleteConfirm: "Επιβεβαίωση διαγραφής;",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Επεξεργασία Προτύπου Προτροπής ${readonly ? "(μόνο για ανάγνωση)" : ""}`,
      Download: "Λήψη",
      Clone: "Κλωνοποίηση",
    },
    Config: {
      Avatar: "Avatar Bot",
      Name: "Όνομα Bot",
      Sync: {
        Title: "Χρήση Κοινής Ρύθμισης",
        SubTitle: "Χρήση κοινής ρύθμισης σε αυτήν τη συνομιλία",
        Confirm: "Επιβεβαίωση αντικατάστασης προσαρμοσμένης ρύθμισης με κοινή ρύθμιση;",
      },
      HideContext: {
        Title: "Απόκρυψη Προτροπών Συμφραζόμενου",
        SubTitle: "Να μην εμφανίζονται προτροπές συμφραζόμενου στη συνομιλία",
      },
      Share: {
        Title: "Κοινοποίηση αυτής της Μάσκας",
        SubTitle: "Δημιουργία συνδέσμου για αυτήν τη μάσκα",
        Action: "Αντιγραφή Συνδέσμου",
      },
    },
  },
  NewChat: {
    Return: "Επιστροφή",
    Skip: "Απλά Ξεκίνα",
    Title: "Επιλέξτε Μάσκα",
    SubTitle: "Συνομιλήστε με την Ψυχή πίσω από τη Μάσκα",
    More: "Βρείτε Περισσότερα",
    NotShow: "Μην Εμφανίζεται Ξανά",
    ConfirmNoShow: "Επιβεβαίωση απενεργοποίησης; Μπορείτε να το ενεργοποιήσετε αργότερα στις ρυθμίσεις.",
  },

  UI: {
    Confirm: "Επιβεβαίωση",
    Cancel: "Ακύρωση",
    Close: "Κλείσιμο",
    Create: "Δημιουργία",
    Edit: "Επεξεργασία",
  },
  Exporter: {
  Model: "Μοντέλο",
  Messages: "Μηνύματα",
  Topic: "Θέμα",
  Time: "Ώρα",
}
};

export default gr;