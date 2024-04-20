export class Tag {
  // Framework
  static readonly ANGULAR = new Tag('Angular', 'red');
  static readonly REACT = new Tag('React', 'blue');
  static readonly VUE = new Tag('VUE', 'pink');
  static readonly LARAVEL = new Tag('Laravel', 'green');
  // Language
  static readonly JAVASCRIPT = new Tag('JavaScript', 'orange');
  static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred');
  static readonly LIVEWIRE = new Tag('Livewire', 'orange');
  static readonly FILAMENT = new Tag('Filament', 'brown');
  static readonly ASPNET = new Tag('ASP.NET', 'purple');

  private constructor(private readonly key: string, public readonly color: string) {

  }

  toString() {
    return this.key;
  }
}
