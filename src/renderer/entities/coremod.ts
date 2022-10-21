import { default as EntityBase } from "./base";
import { MiniInjector } from "../modules/injector";
import settings, { NamespacedSettings } from "../apis/settings";
import { Settings } from "../../types/settings";
import { EntityType } from "../../types/entities";

export default abstract class Coremod<T extends Settings> extends EntityBase {
  public abstract dependencies: string[];
  public abstract dependents: string[];
  public abstract optionalDependencies: string[];
  public abstract optionalDependents: string[];

  protected injector: MiniInjector = new MiniInjector();
  protected settings: NamespacedSettings<T>;
  public entityType = EntityType.COREMOD;

  public constructor(id: string, name: string) {
    super(id, name);
    this.settings = settings.get<T>(id);
  }

  public abstract start(): Promise<void>;
  public abstract stop(): Promise<void>;
}