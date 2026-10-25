import type * as React from 'react';
/** Line glyphs. Territorio Producto: P Productos · X Experimentos · N Notas de producto. Territorio Escritura: E Escritura. S Sobre mí · A Archivo. */
export type LineGlyph = 'P' | 'X' | 'E' | 'N' | 'S' | 'A';
export type LineColor = 'red' | 'blue' | 'yellow' | 'green' | 'magenta' | 'grey';
export interface StationSignProps { title: React.ReactNode; kicker?: string; lines?: LineGlyph[]; size?: 'page' | 'compact'; as?: 'h1' | 'h2' }
export declare function StationSign(props: StationSignProps): React.ReactElement;
export interface BulletProps { line?: LineGlyph | LineColor; size?: 'sm' | 'md' | 'lg' | 'xl'; label?: string; children?: React.ReactNode }
export declare function Bullet(props: BulletProps): React.ReactElement;
export interface BadgeProps { line?: LineGlyph | LineColor; variant?: 'filled' | 'outline'; children: React.ReactNode }
export declare function Badge(props: BadgeProps): React.ReactElement;
export interface DirectionLinkProps { href?: string; direction?: 'left' | 'right' | 'up' | 'down' | 'up-left' | 'up-right' | 'down-left' | 'down-right'; meta?: string; align?: 'start' | 'end'; children: React.ReactNode }
export declare function DirectionLink(props: DirectionLinkProps): React.ReactElement;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { variant?: 'primary' | 'secondary' | 'quiet'; arrow?: boolean; href?: string }
export declare function Button(props: ButtonProps): React.ReactElement;
export interface TextFieldProps { label: string; id?: string; type?: string; placeholder?: string; defaultValue?: string; help?: string; error?: string }
export declare function TextField(props: TextFieldProps): React.ReactElement;
export interface NavItem { label: string; href?: string; line?: LineGlyph; current?: boolean; /** 'producto' | 'escritura' | 'personal': a rule separates groups */ group?: string }
export interface NavBarProps { name: string; homeHref?: string; items: NavItem[]; /** Mobile only: render with the line menu open (previews). */ defaultOpen?: boolean }
export declare function NavBar(props: NavBarProps): React.ReactElement;
export interface CaseCardProps { status?: 'live' | 'soon' | 'retired'; title: string; href?: string; line?: LineGlyph; transfers?: LineGlyph[]; meta?: string; summary?: string; metric?: string; metricLabel?: string; cta?: string }
export declare function CaseCard(props: CaseCardProps): React.ReactElement;
export interface PostRowProps { title: string; href?: string; date: string; line?: LineGlyph; excerpt?: string; readingTime?: string }
export declare function PostRow(props: PostRowProps): React.ReactElement;
export interface RouteStop { period: string; role: string; org: string; description?: string; transfer?: boolean }
export interface RouteTimelineProps { stops: RouteStop[]; line?: LineGlyph; current?: boolean }
export declare function RouteTimeline(props: RouteTimelineProps): React.ReactElement;
export interface PullquoteProps { cite?: string; line?: LineGlyph; children: React.ReactNode }
export declare function Pullquote(props: PullquoteProps): React.ReactElement;
export interface ProseProps { /** 'escritura' for personal texts: 19/1.7 body, no rule over h2 */ variant?: 'producto' | 'escritura'; children: React.ReactNode }
export interface TextAreaProps { label: string; id?: string; rows?: number; placeholder?: string; defaultValue?: string; help?: string; error?: string }
export declare function TextArea(props: TextAreaProps): React.ReactElement;
export interface ChoiceOption { value: string; label: string }
export interface ChoiceGroupProps { legend: string; options: ChoiceOption[]; name?: string; value?: string; defaultValue?: string; onChange?: (value: string) => void; line?: LineGlyph }
export declare function ChoiceGroup(props: ChoiceGroupProps): React.ReactElement;
export interface SectionHeaderProps { title: string; meta?: string; line?: LineGlyph; id?: string; as?: 'h2' | 'h3' }
export declare function SectionHeader(props: SectionHeaderProps): React.ReactElement;
export interface StatItem { value: string; label: string }
export interface StatsProps { items: StatItem[] }
export declare function Stats(props: StatsProps): React.ReactElement;
export interface FooterLink { label: string; href?: string }
export interface FooterColumn { title: string; links: FooterLink[] }
export interface SiteFooterProps { brand: string; tagline?: string; columns: FooterColumn[]; legal?: string }
export declare function SiteFooter(props: SiteFooterProps): React.ReactElement;
export interface SeriesItem { label: string; href?: string; current?: boolean; soon?: boolean }
export interface SeriesRouteProps { title?: string; items: SeriesItem[]; line?: LineGlyph }
export declare function SeriesRoute(props: SeriesRouteProps): React.ReactElement;
export declare function Prose(props: ProseProps): React.ReactElement;
export interface StatusBadgeProps { status?: 'live' | 'soon' | 'retired'; children?: React.ReactNode }
export declare function StatusBadge(props: StatusBadgeProps): React.ReactElement;
export interface MapStation { label: string; href?: string; meta?: string; status?: 'live' | 'soon' }
export interface MapLine { line: LineGlyph; label: string; territory?: 'producto' | 'escritura' | 'personal'; stations: MapStation[] }
export interface NetworkMapProps { title?: string; lines: MapLine[]; legend?: boolean }
export declare function NetworkMap(props: NetworkMapProps): React.ReactElement;
export interface Phase { id: string; label: string; number?: string; optional?: boolean }
export interface PhaseRouteProps { phases: Phase[]; line?: LineGlyph; label?: string }
export declare function PhaseRoute(props: PhaseRouteProps): React.ReactElement;
export interface PhaseHeaderProps { number: string; title: string; id?: string; meta?: string; summary?: string; optional?: boolean; line?: LineGlyph; as?: 'h2' | 'h3' }
export declare function PhaseHeader(props: PhaseHeaderProps): React.ReactElement;
export interface SpecItem { label: string; value: React.ReactNode | string[] }
export interface SpecListProps { items: SpecItem[] }
export declare function SpecList(props: SpecListProps): React.ReactElement;
declare global { interface Window { PbloMetro: { StationSign: typeof StationSign; Bullet: typeof Bullet; Badge: typeof Badge; DirectionLink: typeof DirectionLink; Button: typeof Button; TextField: typeof TextField; NavBar: typeof NavBar; CaseCard: typeof CaseCard; PostRow: typeof PostRow; RouteTimeline: typeof RouteTimeline; Pullquote: typeof Pullquote; Prose: typeof Prose; TextArea: typeof TextArea; ChoiceGroup: typeof ChoiceGroup; SectionHeader: typeof SectionHeader; Stats: typeof Stats; SiteFooter: typeof SiteFooter; SeriesRoute: typeof SeriesRoute; StatusBadge: typeof StatusBadge; NetworkMap: typeof NetworkMap; PhaseRoute: typeof PhaseRoute; PhaseHeader: typeof PhaseHeader; SpecList: typeof SpecList } } }
