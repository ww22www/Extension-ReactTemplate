/**
 * SillyTavern global type declarations.
 * Built from a live SillyTavern.getContext() snapshot (Feb 2026, 1.16.0).
 *
 * Do NOT import ST modules directly; that API is internal and subject to change.
 */

// ---------------------------------------------------------------------------
// eventTypes enum (all keys from live snapshot)
// ---------------------------------------------------------------------------

export type STEventType =
  | 'app_initialized'
  | 'app_ready'
  | 'extras_connected'
  | 'message_swiped'
  | 'message_sent'
  | 'message_received'
  | 'message_edited'
  | 'message_deleted'
  | 'message_updated'
  | 'message_file_embedded'
  | 'message_reasoning_edited'
  | 'message_reasoning_deleted'
  | 'message_swipe_deleted'
  | 'more_messages_loaded'
  | 'impersonate_ready'
  | 'chat_id_changed'
  | 'chatLoaded'
  | 'GENERATION_AFTER_COMMANDS'
  | 'generation_started'
  | 'generation_stopped'
  | 'generation_ended'
  | 'sd_prompt_processing'
  | 'extensions_first_load'
  | 'extension_settings_loaded'
  | 'settings_loaded'
  | 'settings_updated'
  | 'group_updated'
  | 'movable_panels_reset'
  | 'settings_loaded_before'
  | 'settings_loaded_after'
  | 'chatcompletion_source_changed'
  | 'chatcompletion_model_changed'
  | 'oai_preset_changed_before'
  | 'oai_preset_changed_after'
  | 'oai_preset_export_ready'
  | 'oai_preset_import_ready'
  | 'worldinfo_settings_updated'
  | 'worldinfo_updated'
  | 'character_editor_opened'
  | 'character_edited'
  | 'character_page_loaded'
  | 'character_group_overlay_state_change_before'
  | 'character_group_overlay_state_change_after'
  | 'user_message_rendered'
  | 'character_message_rendered'
  | 'force_set_background'
  | 'chat_deleted'
  | 'chat_created'
  | 'group_chat_deleted'
  | 'group_chat_created'
  | 'generate_before_combine_prompts'
  | 'generate_after_combine_prompts'
  | 'generate_after_data'
  | 'group_member_drafted'
  | 'group_wrapper_started'
  | 'group_wrapper_finished'
  | 'world_info_activated'
  | 'text_completion_settings_ready'
  | 'chat_completion_settings_ready'
  | 'chat_completion_prompt_ready'
  | 'character_first_message_selected'
  | 'characterDeleted'
  | 'character_duplicated'
  | 'character_renamed'
  | 'character_renamed_in_past_chat'
  | 'stream_token_received'
  | 'stream_reasoning_done'
  | 'file_attachment_deleted'
  | 'worldinfo_force_activate'
  | 'open_character_library'
  | 'online_status_changed'
  | 'image_swiped'
  | 'connection_profile_loaded'
  | 'connection_profile_created'
  | 'connection_profile_deleted'
  | 'connection_profile_updated'
  | 'tool_calls_performed'
  | 'tool_calls_rendered'
  | 'charManagementDropdown'
  | 'secret_written'
  | 'secret_deleted'
  | 'secret_rotated'
  | 'secret_edited'
  | 'preset_changed'
  | 'preset_deleted'
  | 'preset_renamed'
  | 'preset_renamed_before'
  | 'main_api_changed'
  | 'worldinfo_entries_loaded'
  | 'worldinfo_scan_done'
  | 'media_attachment_deleted'
  | (string & {}); // allow unknown future events without breaking

// ---------------------------------------------------------------------------
// eventTypes object (the actual property on the context)
// ---------------------------------------------------------------------------

export interface STEventTypes {
  APP_INITIALIZED: 'app_initialized';
  APP_READY: 'app_ready';
  EXTRAS_CONNECTED: 'extras_connected';
  MESSAGE_SWIPED: 'message_swiped';
  MESSAGE_SENT: 'message_sent';
  MESSAGE_RECEIVED: 'message_received';
  MESSAGE_EDITED: 'message_edited';
  MESSAGE_DELETED: 'message_deleted';
  MESSAGE_UPDATED: 'message_updated';
  MESSAGE_FILE_EMBEDDED: 'message_file_embedded';
  MESSAGE_REASONING_EDITED: 'message_reasoning_edited';
  MESSAGE_REASONING_DELETED: 'message_reasoning_deleted';
  MESSAGE_SWIPE_DELETED: 'message_swipe_deleted';
  MORE_MESSAGES_LOADED: 'more_messages_loaded';
  IMPERSONATE_READY: 'impersonate_ready';
  CHAT_CHANGED: 'chat_id_changed';
  CHAT_LOADED: 'chatLoaded';
  GENERATION_AFTER_COMMANDS: 'GENERATION_AFTER_COMMANDS';
  GENERATION_STARTED: 'generation_started';
  GENERATION_STOPPED: 'generation_stopped';
  GENERATION_ENDED: 'generation_ended';
  SD_PROMPT_PROCESSING: 'sd_prompt_processing';
  EXTENSIONS_FIRST_LOAD: 'extensions_first_load';
  EXTENSION_SETTINGS_LOADED: 'extension_settings_loaded';
  SETTINGS_LOADED: 'settings_loaded';
  SETTINGS_UPDATED: 'settings_updated';
  GROUP_UPDATED: 'group_updated';
  MOVABLE_PANELS_RESET: 'movable_panels_reset';
  SETTINGS_LOADED_BEFORE: 'settings_loaded_before';
  SETTINGS_LOADED_AFTER: 'settings_loaded_after';
  CHATCOMPLETION_SOURCE_CHANGED: 'chatcompletion_source_changed';
  CHATCOMPLETION_MODEL_CHANGED: 'chatcompletion_model_changed';
  OAI_PRESET_CHANGED_BEFORE: 'oai_preset_changed_before';
  OAI_PRESET_CHANGED_AFTER: 'oai_preset_changed_after';
  OAI_PRESET_EXPORT_READY: 'oai_preset_export_ready';
  OAI_PRESET_IMPORT_READY: 'oai_preset_import_ready';
  WORLDINFO_SETTINGS_UPDATED: 'worldinfo_settings_updated';
  WORLDINFO_UPDATED: 'worldinfo_updated';
  CHARACTER_EDITOR_OPENED: 'character_editor_opened';
  CHARACTER_EDITED: 'character_edited';
  CHARACTER_PAGE_LOADED: 'character_page_loaded';
  CHARACTER_GROUP_OVERLAY_STATE_CHANGE_BEFORE: 'character_group_overlay_state_change_before';
  CHARACTER_GROUP_OVERLAY_STATE_CHANGE_AFTER: 'character_group_overlay_state_change_after';
  USER_MESSAGE_RENDERED: 'user_message_rendered';
  CHARACTER_MESSAGE_RENDERED: 'character_message_rendered';
  FORCE_SET_BACKGROUND: 'force_set_background';
  CHAT_DELETED: 'chat_deleted';
  CHAT_CREATED: 'chat_created';
  GROUP_CHAT_DELETED: 'group_chat_deleted';
  GROUP_CHAT_CREATED: 'group_chat_created';
  GENERATE_BEFORE_COMBINE_PROMPTS: 'generate_before_combine_prompts';
  GENERATE_AFTER_COMBINE_PROMPTS: 'generate_after_combine_prompts';
  GENERATE_AFTER_DATA: 'generate_after_data';
  GROUP_MEMBER_DRAFTED: 'group_member_drafted';
  GROUP_WRAPPER_STARTED: 'group_wrapper_started';
  GROUP_WRAPPER_FINISHED: 'group_wrapper_finished';
  WORLD_INFO_ACTIVATED: 'world_info_activated';
  TEXT_COMPLETION_SETTINGS_READY: 'text_completion_settings_ready';
  CHAT_COMPLETION_SETTINGS_READY: 'chat_completion_settings_ready';
  CHAT_COMPLETION_PROMPT_READY: 'chat_completion_prompt_ready';
  CHARACTER_FIRST_MESSAGE_SELECTED: 'character_first_message_selected';
  CHARACTER_DELETED: 'characterDeleted';
  CHARACTER_DUPLICATED: 'character_duplicated';
  CHARACTER_RENAMED: 'character_renamed';
  CHARACTER_RENAMED_IN_PAST_CHAT: 'character_renamed_in_past_chat';
  SMOOTH_STREAM_TOKEN_RECEIVED: 'stream_token_received';
  STREAM_TOKEN_RECEIVED: 'stream_token_received';
  STREAM_REASONING_DONE: 'stream_reasoning_done';
  FILE_ATTACHMENT_DELETED: 'file_attachment_deleted';
  WORLDINFO_FORCE_ACTIVATE: 'worldinfo_force_activate';
  OPEN_CHARACTER_LIBRARY: 'open_character_library';
  ONLINE_STATUS_CHANGED: 'online_status_changed';
  IMAGE_SWIPED: 'image_swiped';
  CONNECTION_PROFILE_LOADED: 'connection_profile_loaded';
  CONNECTION_PROFILE_CREATED: 'connection_profile_created';
  CONNECTION_PROFILE_DELETED: 'connection_profile_deleted';
  CONNECTION_PROFILE_UPDATED: 'connection_profile_updated';
  TOOL_CALLS_PERFORMED: 'tool_calls_performed';
  TOOL_CALLS_RENDERED: 'tool_calls_rendered';
  CHARACTER_MANAGEMENT_DROPDOWN: 'charManagementDropdown';
  SECRET_WRITTEN: 'secret_written';
  SECRET_DELETED: 'secret_deleted';
  SECRET_ROTATED: 'secret_rotated';
  SECRET_EDITED: 'secret_edited';
  PRESET_CHANGED: 'preset_changed';
  PRESET_DELETED: 'preset_deleted';
  PRESET_RENAMED: 'preset_renamed';
  PRESET_RENAMED_BEFORE: 'preset_renamed_before';
  MAIN_API_CHANGED: 'main_api_changed';
  WORLDINFO_ENTRIES_LOADED: 'worldinfo_entries_loaded';
  WORLDINFO_SCAN_DONE: 'worldinfo_scan_done';
  MEDIA_ATTACHMENT_DELETED: 'media_attachment_deleted';
  [key: string]: STEventType;
}

// ---------------------------------------------------------------------------
// Tokenizer IDs (from live snapshot)
// ---------------------------------------------------------------------------

export interface STTokenizers {
  NONE: 0;
  GPT2: 1;
  OPENAI: 2;
  LLAMA: 3;
  NERD: 4;
  NERD2: 5;
  API_CURRENT: 6;
  MISTRAL: 7;
  YI: 8;
  API_TEXTGENERATIONWEBUI: 9;
  API_KOBOLD: 10;
  CLAUDE: 11;
  LLAMA3: 12;
  GEMMA: 13;
  JAMBA: 14;
  QWEN2: 15;
  COMMAND_R: 16;
  NEMO: 17;
  DEEPSEEK: 18;
  COMMAND_A: 19;
  BEST_MATCH: 99;
}

export type STTokenizerId = STTokenizers[keyof STTokenizers];

// ---------------------------------------------------------------------------
// Sub-types
// ---------------------------------------------------------------------------

export interface STChatMessage {
  name: string;
  is_user: boolean;
  is_system: boolean;
  send_date: string;
  mes: string;
  extra: Record<string, unknown>;
  swipes?: string[];
  swipe_id?: number;
  swipe_info?: Array<{ send_date: string; extra: Record<string, unknown> }>;
  continues?: unknown[];
  continues_head?: unknown[];
  continueHistory?: unknown[];
  continueSwipeId?: number;
  continueSwipe?: unknown;
  [key: string]: unknown;
}

export interface STCharacterDataExtensions {
  talkativeness?: string;
  fav?: boolean;
  world?: string;
  depth_prompt?: {
    prompt: string;
    depth: number;
    role: string;
  };
  [key: string]: unknown;
}

export interface STCharacterBookEntry {
  id: number;
  keys: string[];
  secondary_keys: string[];
  comment: string;
  content: string;
  constant: boolean;
  selective: boolean;
  insertion_order: number;
  enabled: boolean;
  position: string;
  use_regex: boolean;
  extensions: {
    position: number;
    exclude_recursion: boolean;
    display_index: number;
    probability: number;
    useProbability: boolean;
    depth: number;
    selectiveLogic: number;
    group: string;
    group_override: boolean;
    group_weight: number;
    prevent_recursion: boolean;
    delay_until_recursion: boolean;
    scan_depth: number | null;
    match_whole_words: boolean | null;
    use_group_scoring: boolean;
    case_sensitive: boolean | null;
    automation_id: string;
    role: number;
    vectorized: boolean;
    sticky: number;
    cooldown: number;
    delay: number;
  };
}

export interface STCharacterBook {
  entries: STCharacterBookEntry[];
  name: string;
}

export interface STCharacterData {
  name: string;
  description: string;
  personality: string;
  scenario: string;
  first_mes: string;
  mes_example: string;
  creator_notes: string;
  system_prompt: string;
  post_history_instructions: string;
  tags: string[];
  creator: string;
  character_version: string;
  alternate_greetings: string[];
  extensions: STCharacterDataExtensions;
  character_book?: STCharacterBook;
  group_only_greetings: string[];
}

export interface STCharacter {
  name: string;
  description: string;
  personality: string;
  first_mes: string;
  avatar: string;
  chat: string;
  mes_example: string;
  scenario: string;
  create_date: string;
  talkativeness: string;
  fav: boolean;
  creatorcomment: string;
  spec: string;
  spec_version: string;
  data: STCharacterData;
  tags: string[];
  json_data: string;
  date_added: number;
  chat_size: number;
  date_last_chat: number;
  data_size: number;
  [key: string]: unknown;
}

export interface STGroup {
  id: string;
  name: string;
  avatar_url: string;
  members: string[];
  chat_id: string;
  past_metadata?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface STTag {
  id: string;
  name: string;
  color: string;
}

export interface STExtensionPromptEntry {
  value: string;
  position: number;
  depth: number;
  scan: boolean;
  role: number;
  filter: unknown | null;
}

export interface STChatMetadata {
  integrity?: string;
  chat_id_hash?: number;
  note_prompt?: string;
  note_interval?: number;
  note_position?: number;
  note_depth?: number;
  note_role?: number;
  [key: string]: unknown;
}

export interface STStreamingProcessor {
  result: string;
  messageId: number;
  isFinished: boolean;
  [key: string]: unknown;
}

// ---------------------------------------------------------------------------
// eventSource
// ---------------------------------------------------------------------------

export interface STEventSource {
  events: Record<STEventType, Array<((...args: unknown[]) => void) | null>>;
  autoFireLastArgs: Record<string, unknown>;
  autoFireAfterEmit: Record<string, unknown>;
  on(event: STEventType, listener: (...args: unknown[]) => void): void;
  once(event: STEventType, listener: (...args: unknown[]) => void): void;
  off(event: STEventType, listener: (...args: unknown[]) => void): void;
  emit(event: STEventType, ...args: unknown[]): void;
  makeFirst(event: STEventType, listener: (...args: unknown[]) => void): void;
  makeLast(event: STEventType, listener: (...args: unknown[]) => void): void;
}

// ---------------------------------------------------------------------------
// POPUP_TYPE / POPUP_RESULT
// ---------------------------------------------------------------------------

export interface STPopupType {
  TEXT: 1;
  CONFIRM: 2;
  INPUT: 3;
  DISPLAY: 4;
  CROP: 5;
}

export interface STPopupResult {
  AFFIRMATIVE: 1;
  NEGATIVE: 0;
  CANCELLED: null;
  CUSTOM1: 1001;
  CUSTOM2: 1002;
  CUSTOM3: 1003;
  CUSTOM4: 1004;
  CUSTOM5: 1005;
  CUSTOM6: 1006;
  CUSTOM7: 1007;
  CUSTOM8: 1008;
  CUSTOM9: 1009;
}

// ---------------------------------------------------------------------------
// ARGUMENT_TYPE
// ---------------------------------------------------------------------------

export interface STArgumentType {
  STRING: 'string';
  NUMBER: 'number';
  RANGE: 'range';
  BOOLEAN: 'bool';
  VARIABLE_NAME: 'varname';
  CLOSURE: 'closure';
  SUBCOMMAND: 'subcommand';
  LIST: 'list';
  DICTIONARY: 'dictionary';
}

// ---------------------------------------------------------------------------
// Generation param types
// ---------------------------------------------------------------------------

export interface STJsonSchema {
  name: string;
  description?: string;
  strict?: boolean;
  value: Record<string, unknown>;
}

export interface STGenerateQuietPromptParams {
  quietPrompt: string;
  signal?: AbortSignal;
  quietToLoud?: boolean;
  systemPrompt?: string;
  responseLength?: number;
  jsonSchema?: STJsonSchema;
}

export interface STGenerateRawParams {
  prompt: string | Array<{ role: string; content: string }>;
  systemPrompt?: string;
  prefill?: string;
  jsonSchema?: STJsonSchema;
  maxTokens?: number;
  signal?: AbortSignal;
}

// ---------------------------------------------------------------------------
// Main context type
// ---------------------------------------------------------------------------

export interface STContext {
  // ── Identity ─────────────────────────────────────────────────────────────

  /** User's display name / persona name (e.g. "Kael") */
  name1: string;

  /** Active character's name (e.g. "Seraphina") */
  name2: string;

  /**
   * Index of the selected character in `characters`, as a **string** (e.g. "0").
   * Cast with `Number(characterId)` when you need a numeric index.
   */
  characterId: string | undefined;

  /** ID of the selected group, or `null` when in a solo chat */
  groupId: string | null;

  // ── Chat state ───────────────────────────────────────────────────────────

  /** Current chat message array. Read/write. */
  chat: STChatMessage[];

  /** Current chat file id (e.g. "Seraphina - 2023-5-12 @21h 32m 29s 224ms") */
  chatId: string | undefined;

  /** Metadata attached to the current chat (note prompts, world info state, etc.) */
  chatMetadata: STChatMetadata;

  // ── World ────────────────────────────────────────────────────────────────

  /** All loaded character cards */
  characters: STCharacter[];

  /** All loaded groups */
  groups: STGroup[];

  /** All tags defined in the system */
  tags: STTag[];

  /** Maps avatar filenames to an array of tag ids */
  tagMap: Record<string, string[]>;

  // ── Settings ─────────────────────────────────────────────────────────────

  /** Persistent per-account key-value storage */
  accountStorage: Record<string, unknown>;

  /** Per-extension settings keyed by MODULE_NAME */
  extensionSettings: Record<string, Record<string, unknown>>;

  /** Injected extension prompts map */
  extensionPrompts: Record<string, STExtensionPromptEntry>;

  /** API connection status string (e.g. "no_connection") */
  onlineStatus: string;

  /** Maximum context size (tokens) */
  maxContext: number;

  /** Active API type identifier (e.g. "openai") */
  mainApi: string;

  /** Currently active menu/view name */
  menuType: string;

  /** Active streaming processor, or `null` when idle */
  streamingProcessor: STStreamingProcessor | null;

  /** Full chat completion settings object */
  chatCompletionSettings: Record<string, unknown>;

  /** Full text completion settings object */
  textCompletionSettings: Record<string, unknown>;

  /** Power user / UI settings object */
  powerUserSettings: Record<string, unknown>;

  /** STScript variables */
  variables: {
    local: Record<string, unknown>;
    global: Record<string, unknown>;
  };

  // ── Events ───────────────────────────────────────────────────────────────

  eventSource: STEventSource;

  /** Strongly-typed enum of all event type strings */
  eventTypes: STEventTypes;

  // ── Tokenizers ───────────────────────────────────────────────────────────

  /**
   * Object mapping tokenizer name → id number.
   * Use the numeric id with getTextTokens() and getTokenCountAsync().
   */
  tokenizers: STTokenizers;

  getTextTokens(tokenizerId: STTokenizerId, text: string): number[];

  /** @deprecated Use getTokenCountAsync instead */
  getTokenCount(text: string, padding?: number): number;

  getTokenCountAsync(text: string, padding?: number): Promise<number>;

  // ── Popup helpers ────────────────────────────────────────────────────────

  POPUP_TYPE: STPopupType;
  POPUP_RESULT: STPopupResult;

  // ── Argument types (for SlashCommandParser) ──────────────────────────────

  ARGUMENT_TYPE: STArgumentType;

  // ── Navigation / chat management ─────────────────────────────────────────

  getCurrentChatId(): string | undefined;

  reloadCurrentChat(): Promise<void>;

  renameChat(oldName: string, newName: string): Promise<void>;

  openCharacterChat(fileName: string): Promise<void>;

  openGroupChat(groupId: string, chatId: string): Promise<void>;

  selectCharacterById(id: number): Promise<void>;

  getCharacters(): Promise<void>;

  unshallowCharacter(characterId: number): Promise<STCharacter>;

  getCharacterCardFields(characterId: number): Record<string, unknown>;

  getThumbnailUrl(type: 'avatar' | 'bg', fileName: string): string;

  getRequestHeaders(): Record<string, string>;

  // ── Message operations ────────────────────────────────────────────────────

  addOneMessage(
    message: Partial<STChatMessage>,
    options?: { type?: string; insertBefore?: number | null; scroll?: boolean },
  ): Promise<void>;

  deleteLastMessage(): Promise<void>;

  deleteMessage(messageId: number): Promise<void>;

  updateMessageBlock(messageId: number, message: Partial<STChatMessage>): void;

  messageFormatting(
    text: string,
    characterName: string,
    isSystem: boolean,
    isUser: boolean,
    messageId?: number,
  ): string;

  printMessages(): Promise<void>;

  clearChat(): void;

  saveReply(type: string, text: string, choiceIndex?: number): Promise<void>;

  sendSystemMessage(
    type: string,
    text: string,
    extra?: Record<string, unknown>,
  ): Promise<void>;

  // ── Generation ────────────────────────────────────────────────────────────

  generate(
    type: string,
    options?: Record<string, unknown>,
    dryRun?: boolean,
  ): Promise<unknown>;

  sendStreamingRequest(
    type: string,
    data: Record<string, unknown>,
  ): Promise<unknown>;

  sendGenerationRequest(
    type: string,
    data: Record<string, unknown>,
  ): Promise<unknown>;

  stopGeneration(): void;

  /**
   * Generate text silently in the context of the current chat.
   * Does not render anything in the UI.
   */
  generateQuietPrompt(params: STGenerateQuietPromptParams): Promise<string>;

  /**
   * Generate text with full control over the prompt, bypassing chat context.
   */
  generateRaw(params: STGenerateRawParams): Promise<string>;

  // ── Persistence ───────────────────────────────────────────────────────────

  saveSettingsDebounced(): void;

  saveMetadataDebounced(): void;

  saveMetadata(): Promise<void>;

  saveChat(): Promise<void>;

  updateChatMetadata(metadata: Partial<STChatMetadata>, reset?: boolean): void;

  /**
   * Write JSON-serializable data into a character card's extensions field.
   * @param characterId - numeric index in the `characters` array
   * @param key         - your extension's unique key
   * @param value       - any JSON-serializable value
   */
  writeExtensionField(
    characterId: number,
    key: string,
    value: unknown,
  ): Promise<void>;

  // ── Extension prompts ─────────────────────────────────────────────────────

  setExtensionPrompt(
    key: string,
    value: string,
    position?: number,
    depth?: number,
    scan?: boolean,
    role?: number,
  ): void;

  // ── Macro / template substitution ────────────────────────────────────────

  substituteParams(
    template: string,
    name1?: string,
    name2?: string,
    original?: string,
    group?: string,
    chatId?: string,
  ): string;

  substituteParamsExtended(
    template: string,
    additionalMacros?: Record<string, string>,
  ): string;

  // ── UI helpers ────────────────────────────────────────────────────────────

  activateSendButtons(): void;

  deactivateSendButtons(): void;

  addLocaleData(data: Record<string, string>): void;

  // ── SlashCommandParser ────────────────────────────────────────────────────

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  SlashCommandParser: any;

  // ── Character create form data ────────────────────────────────────────────

  createCharacterData: {
    name: string;
    description: string;
    creator_notes: string;
    post_history_instructions: string;
    character_version: string;
    system_prompt: string;
    tags: string;
    creator: string;
    personality: string;
    first_message: string;
    avatar: string | null;
    scenario: string;
    mes_example: string;
    world: string;
    talkativeness: number;
    alternate_greetings: string[];
    depth_prompt_prompt: string;
    depth_prompt_depth: number;
    depth_prompt_role: string;
    extensions: Record<string, unknown>;
    extra_books: unknown[];
  };
}

// ---------------------------------------------------------------------------
// Global augmentation
// ---------------------------------------------------------------------------

declare global {
  const SillyTavern: {
    getContext(): STContext;
    /** Shared frontend libraries (Fuse, DOMPurify, Handlebars, etc.) */
    libs: Record<string, unknown>;
  };
}
